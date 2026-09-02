"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import { SKELETON_MODEL_URL } from "@/data/skeletalSystem";
import { CNS_PART1_MODEL_URL } from "@/data/cnsSystem";

useGLTF.setDecoderPath("/draco/");
useGLTF.preload(SKELETON_MODEL_URL);
useGLTF.preload(CNS_PART1_MODEL_URL);

const HIGHLIGHT_COLOR = new THREE.Color("#2bb3a1");
const NO_EMISSIVE = new THREE.Color(0x000000);
const DIMMED_OPACITY = 0.12;

// Forces every mesh in a layer to render at DIMMED_OPACITY — used for the
// skeleton, which here is pure spatial context (never selectable, never
// fully opaque), so the student can tell which body region an organ sits in
// instead of seeing it float in empty space.
const NONE_VISIBLE = new Set<string>();

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

// GLTFLoader wraps a multi-primitive glTF mesh in a Group carrying the
// node's real name, with child Meshes named after the mesh resource
// instead — propagate the Group's name down so structure names still
// match. The scene root is itself a named Group ("Scene") and must be
// excluded, or every top-level mesh gets renamed to "Scene".
function propagateGroupNames(scene: THREE.Object3D) {
  scene.traverse((obj) => {
    if (obj === scene || !(obj instanceof THREE.Group) || !obj.name) return;
    obj.children.forEach((child) => {
      if (child instanceof THREE.Mesh) child.name = obj.name;
    });
  });
}

interface ModelProps {
  url: string;
  visibleMeshNames: Set<string> | null;
  selectedMeshNames: Set<string> | null;
  clickable: boolean;
  onSelect: (meshName: string) => void;
  onLoaded: (scene: THREE.Group) => void;
}

function Model({ url, visibleMeshNames, selectedMeshNames, clickable, onSelect, onLoaded }: ModelProps) {
  const { scene } = useGLTF(url);
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    propagateGroupNames(scene);
  }, [scene]);

  useEffect(() => {
    onLoaded(scene);
  }, [scene, onLoaded]);

  useEffect(() => {
    applyMeshVisibility(scene, visibleMeshNames, selectedMeshNames);
    invalidate();
  }, [scene, visibleMeshNames, selectedMeshNames, invalidate]);

  // Don't stop propagation until we know this hit actually matters: the
  // nearest intersected mesh under the cursor is often a dimmed one that
  // doesn't belong to visibleMeshNames (e.g. an occluding organ or the
  // skeleton context layer), and the click should fall through to
  // whatever's behind it instead of being silently swallowed here.
  function handleClick(event: ThreeEvent<MouseEvent>) {
    if (!clickable) return;
    const mesh = event.object;
    if (!(mesh instanceof THREE.Mesh)) return;
    if (visibleMeshNames && !visibleMeshNames.has(mesh.name)) return;
    event.stopPropagation();
    onSelect(mesh.name);
  }

  return <primitive object={scene} onClick={handleClick} />;
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

interface FrameCameraProps {
  cnsScene: THREE.Group | null;
  focusNames: Set<string> | null;
  padding: number;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
}

// Frames the camera on the CNS model alone — the skeleton is only ever
// a dimmed backdrop and shouldn't influence the zoom, or a selected structure
// with a small footprint (e.g. a single geniculate body) would always be
// framed as if it spanned the whole head. Three.js's camera is an imperative scene-graph
// object, not React state — mutating it in place (position, near/far,
// projection matrix) is the normal way to move it, which is what the
// disabled rule below is objecting to.
/* eslint-disable react-hooks/immutability */
function FrameCamera({ cnsScene, focusNames, padding, controlsRef }: FrameCameraProps) {
  const camera = useThree((state) => state.camera);
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    if (!cnsScene) return;
    const box = new THREE.Box3();
    const found = expandBoxByFocus(cnsScene, focusNames, box);
    if (!found) return;

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
  }, [cnsScene, focusNames, padding, camera, controlsRef, invalidate]);

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

interface CnsCanvasProps {
  visibleMeshNames: Set<string> | null;
  selectedMeshNames: Set<string> | null;
  onSelect: (meshName: string) => void;
}

export function CnsCanvas({ visibleMeshNames, selectedMeshNames, onSelect }: CnsCanvasProps) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);
  const [cnsScene, setCnsScene] = useState<THREE.Group | null>(null);

  const focusNames = selectedMeshNames ?? visibleMeshNames;
  const padding = selectedMeshNames ? 2.4 : 2.0;

  return (
    <Canvas
      camera={{ position: [0, 0.2, 2.6], fov: 40, near: 0.01, far: 50 }}
      dpr={[1, 2]}
      gl={{ alpha: true }}
      frameloop="demand"
    >
      <hemisphereLight args={["#ffffff", "#7a8494", 1]} />
      <directionalLight position={[2, 3, 2]} intensity={1.1} />
      <directionalLight position={[-2, -1, -2]} intensity={0.4} />
      <Suspense fallback={<Loading />}>
        <Model
          url={SKELETON_MODEL_URL}
          visibleMeshNames={NONE_VISIBLE}
          selectedMeshNames={null}
          clickable={false}
          onSelect={onSelect}
          onLoaded={() => {}}
        />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Model
          url={CNS_PART1_MODEL_URL}
          visibleMeshNames={visibleMeshNames}
          selectedMeshNames={selectedMeshNames}
          clickable
          onSelect={onSelect}
          onLoaded={setCnsScene}
        />
      </Suspense>
      <FrameCamera
        cnsScene={cnsScene}
        focusNames={focusNames}
        padding={padding}
        controlsRef={controlsRef}
      />
      <OrbitControls ref={controlsRef} makeDefault minDistance={0.05} maxDistance={8} enableDamping />
    </Canvas>
  );
}
