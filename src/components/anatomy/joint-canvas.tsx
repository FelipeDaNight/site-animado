"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import { SKELETON_MODEL_URL } from "@/data/skeletalSystem";
import { JOINTS_MODEL_URL } from "@/data/articulations";

useGLTF.setDecoderPath("/draco/");
useGLTF.preload(SKELETON_MODEL_URL);

const HIGHLIGHT_COLOR = new THREE.Color("#2bb3a1");
const NO_EMISSIVE = new THREE.Color(0x000000);
const DIMMED_OPACITY = 0.12;

function applyMeshVisibility(
  scene: THREE.Object3D,
  visibleMeshNames: Set<string> | null,
  selectedMeshNames: Set<string> | null
) {
  scene.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return;
    if (!obj.userData.cloned) {
      obj.material = (obj.material as THREE.MeshStandardMaterial).clone();
      obj.userData.cloned = true;
    }
    const material = obj.material as THREE.MeshStandardMaterial;
    const isVisible = !visibleMeshNames || visibleMeshNames.has(obj.name);
    material.transparent = !isVisible;
    material.opacity = isVisible ? 1 : DIMMED_OPACITY;
    material.depthWrite = isVisible;
    material.emissive.copy(selectedMeshNames?.has(obj.name) ? HIGHLIGHT_COLOR : NO_EMISSIVE);
    material.needsUpdate = true;
  });
}

function expandBoxByFocus(scene: THREE.Object3D, focusNames: Set<string> | null, box: THREE.Box3) {
  let found = false;
  scene.traverse((obj) => {
    if (!(obj instanceof THREE.Mesh)) return;
    if (focusNames && !focusNames.has(obj.name)) return;
    box.expandByObject(obj);
    found = true;
  });
  return found;
}

interface ModelProps {
  url: string;
  visibleMeshNames: Set<string> | null;
  selectedMeshNames: Set<string> | null;
  onSelect: (meshName: string, point: THREE.Vector3) => void;
  onLoaded: (scene: THREE.Group) => void;
}

function Model({ url, visibleMeshNames, selectedMeshNames, onSelect, onLoaded }: ModelProps) {
  const { scene } = useGLTF(url);
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    onLoaded(scene);
  }, [scene, onLoaded]);

  useEffect(() => {
    applyMeshVisibility(scene, visibleMeshNames, selectedMeshNames);
    invalidate();
  }, [scene, visibleMeshNames, selectedMeshNames, invalidate]);

  // Don't stop propagation until we know this hit actually matters: the
  // nearest intersected mesh under the cursor is often a dimmed one that
  // doesn't belong to visibleMeshNames (e.g. an occluding bone), and the
  // click should fall through to whatever's behind it instead of being
  // silently swallowed here.
  function handleClick(event: ThreeEvent<MouseEvent>) {
    const mesh = event.object;
    if (!(mesh instanceof THREE.Mesh)) return;
    if (visibleMeshNames && !visibleMeshNames.has(mesh.name)) return;
    event.stopPropagation();
    onSelect(mesh.name, event.point);
  }

  return <primitive object={scene} onClick={handleClick} />;
}

// A bone or ligament mesh can belong to more than one joint (e.g. the femur
// forms both the hip and the knee), so the clicked mesh name alone doesn't
// always identify a single joint. When it doesn't, we disambiguate using the
// 3D point where the click actually landed: for each candidate joint we
// compute the bounding-box center of its own meshes in the currently loaded
// scenes, and pick whichever joint's center is closest to the click.
function resolveJointSlug(
  meshName: string,
  point: THREE.Vector3,
  meshNameToJointSlugs: Record<string, string[]>,
  jointMeshNamesBySlug: Record<string, string[]>,
  scenes: (THREE.Group | null)[]
): string | null {
  const candidates = meshNameToJointSlugs[meshName];
  if (!candidates || candidates.length === 0) return null;
  if (candidates.length === 1) return candidates[0];

  let bestSlug: string | null = null;
  let bestDist = Infinity;
  for (const slug of candidates) {
    const names = new Set(jointMeshNamesBySlug[slug] ?? []);
    const box = new THREE.Box3();
    let found = false;
    for (const scene of scenes) {
      if (!scene) continue;
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh && names.has(obj.name)) {
          box.expandByObject(obj);
          found = true;
        }
      });
    }
    if (!found) continue;
    const dist = box.getCenter(new THREE.Vector3()).distanceTo(point);
    if (dist < bestDist) {
      bestDist = dist;
      bestSlug = slug;
    }
  }
  return bestSlug ?? candidates[0];
}

interface FrameCameraProps {
  boneScene: THREE.Group | null;
  ligamentScene: THREE.Group | null;
  boneFocusNames: Set<string> | null;
  ligamentFocusNames: Set<string> | null;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
}

// Frames the camera on whichever bones/ligaments are currently relevant,
// combining both loaded models into a single bounding box. Three.js's
// camera is an imperative scene-graph object, not React state — mutating
// it in place (position, near/far, projection matrix) is the normal way
// to move it, which is what the disabled rule below is objecting to.
/* eslint-disable react-hooks/immutability */
function FrameCamera({ boneScene, ligamentScene, boneFocusNames, ligamentFocusNames, controlsRef }: FrameCameraProps) {
  const camera = useThree((state) => state.camera);
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    const box = new THREE.Box3();
    let found = false;
    if (boneScene) found = expandBoxByFocus(boneScene, boneFocusNames, box) || found;
    if (ligamentScene) found = expandBoxByFocus(ligamentScene, ligamentFocusNames, box) || found;
    if (!found) return;

    const padding = ligamentScene ? 2.6 : 1.7;
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;
    const distance = maxDim * padding;

    camera.position.set(center.x, center.y, center.z + distance);
    if (camera instanceof THREE.PerspectiveCamera) {
      camera.near = Math.max(maxDim / 100, 0.01);
      camera.far = maxDim * 50;
      camera.updateProjectionMatrix();
    }

    const controls = controlsRef.current;
    if (controls) {
      controls.target.copy(center);
      controls.update();
    }
    invalidate();
  }, [boneScene, ligamentScene, boneFocusNames, ligamentFocusNames, camera, controlsRef, invalidate]);

  return null;
}
/* eslint-enable react-hooks/immutability */

function Loading() {
  return (
    <mesh>
      <sphereGeometry args={[0.001]} />
    </mesh>
  );
}

interface JointCanvasProps {
  boneMeshNames: Set<string> | null;
  ligamentMeshNames: Set<string>;
  meshNameToJointSlugs: Record<string, string[]>;
  jointMeshNamesBySlug: Record<string, string[]>;
  onSelect: (slug: string) => void;
}

export function JointCanvas({
  boneMeshNames,
  ligamentMeshNames,
  meshNameToJointSlugs,
  jointMeshNamesBySlug,
  onSelect,
}: JointCanvasProps) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const [boneScene, setBoneScene] = useState<THREE.Group | null>(null);
  const [ligamentScene, setLigamentScene] = useState<THREE.Group | null>(null);

  function handleMeshClick(meshName: string, point: THREE.Vector3) {
    const slug = resolveJointSlug(meshName, point, meshNameToJointSlugs, jointMeshNamesBySlug, [
      boneScene,
      ligamentScene,
    ]);
    if (slug) onSelect(slug);
  }

  return (
    <Canvas
      camera={{ position: [0, 0.2, 2.6], fov: 40, near: 0.01, far: 50 }}
      dpr={[1, 2]}
      gl={{ alpha: true, preserveDrawingBuffer: true }}
      frameloop="demand"
    >
      <hemisphereLight args={["#ffffff", "#7a8494", 1]} />
      <directionalLight position={[2, 3, 2]} intensity={1.1} />
      <directionalLight position={[-2, -1, -2]} intensity={0.4} />
      <Suspense fallback={<Loading />}>
        <Model
          url={SKELETON_MODEL_URL}
          visibleMeshNames={boneMeshNames}
          selectedMeshNames={null}
          onSelect={handleMeshClick}
          onLoaded={setBoneScene}
        />
      </Suspense>
      <Suspense fallback={null}>
        <Model
          url={JOINTS_MODEL_URL}
          visibleMeshNames={ligamentMeshNames}
          selectedMeshNames={ligamentMeshNames}
          onSelect={handleMeshClick}
          onLoaded={setLigamentScene}
        />
      </Suspense>
      <FrameCamera
        boneScene={boneScene}
        ligamentScene={ligamentScene}
        boneFocusNames={boneMeshNames}
        ligamentFocusNames={ligamentMeshNames}
        controlsRef={controlsRef}
      />
      <OrbitControls ref={controlsRef} makeDefault minDistance={0.05} maxDistance={8} enableDamping />
    </Canvas>
  );
}
