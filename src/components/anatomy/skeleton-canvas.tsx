"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import { SKELETON_MODEL_URL } from "@/data/skeletalSystem";

useGLTF.setDecoderPath("/draco/");
useGLTF.preload(SKELETON_MODEL_URL);

const HIGHLIGHT_COLOR = new THREE.Color("#2bb3a1");
const DIMMED_OPACITY = 0.12;

interface SkeletonModelProps {
  modelUrl: string;
  visibleMeshNames: Set<string> | null;
  selectedMeshNames: Set<string> | null;
  onSelect: (meshName: string) => void;
  controlsRef: React.RefObject<OrbitControlsImpl | null>;
}

function SkeletonModel({ modelUrl, visibleMeshNames, selectedMeshNames, onSelect, controlsRef }: SkeletonModelProps) {
  const { scene } = useGLTF(modelUrl);
  const camera = useThree((state) => state.camera);
  const invalidate = useThree((state) => state.invalidate);

  // GLTFLoader wraps a multi-primitive glTF mesh (e.g. a muscle with two
  // materials) in a Group carrying the node's real name, with child Meshes
  // named after the mesh resource + primitive index instead — so our
  // data's mesh names (which are node names) never match those children.
  // Propagating each named Group's name down to its Mesh children once per
  // scene load makes every primitive addressable by its real structure name.
  useEffect(() => {
    scene.traverse((obj) => {
      if (!(obj instanceof THREE.Group) || !obj.name) return;
      obj.children.forEach((child) => {
        if (child instanceof THREE.Mesh) child.name = obj.name;
      });
    });
  }, [scene]);

  useEffect(() => {
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
      material.emissive.copy(selectedMeshNames?.has(obj.name) ? HIGHLIGHT_COLOR : new THREE.Color(0x000000));
    });
    invalidate();
  }, [scene, visibleMeshNames, selectedMeshNames, invalidate]);

  // Frame the camera on whatever is currently selected: the specific bone(s)
  // if one is picked (closer, tighter fit so a small carpal bone or a single
  // vertebra isn't left tiny in a whole-region shot), otherwise the whole
  // region's bounds (so switching regions brings that body part into view
  // instead of leaving a fixed whole-body camera). Three.js's camera is an
  // imperative scene-graph object, not React state — mutating it in place
  // (position, near/far, projection matrix) is the normal way to move it,
  // which is what the disabled rule below is objecting to.
  /* eslint-disable react-hooks/immutability */
  useEffect(() => {
    const focusNames = selectedMeshNames ?? visibleMeshNames;
    const padding = selectedMeshNames ? 2.4 : 1.7;

    const box = new THREE.Box3();
    let found = false;
    scene.traverse((obj) => {
      if (!(obj instanceof THREE.Mesh)) return;
      if (focusNames && !focusNames.has(obj.name)) return;
      box.expandByObject(obj);
      found = true;
    });
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
  }, [scene, visibleMeshNames, selectedMeshNames, camera, controlsRef, invalidate]);
  /* eslint-enable react-hooks/immutability */

  function handleClick(event: ThreeEvent<MouseEvent>) {
    event.stopPropagation();
    const mesh = event.object;
    if (!(mesh instanceof THREE.Mesh)) return;
    if (visibleMeshNames && !visibleMeshNames.has(mesh.name)) return;
    onSelect(mesh.name);
  }

  return <primitive object={scene} onClick={handleClick} />;
}

function Loading() {
  return (
    <mesh>
      <sphereGeometry args={[0.001]} />
    </mesh>
  );
}

interface SkeletonCanvasProps {
  modelUrl?: string;
  visibleMeshNames: Set<string> | null;
  selectedMeshNames: Set<string> | null;
  onSelect: (meshName: string) => void;
}

export function SkeletonCanvas({
  modelUrl = SKELETON_MODEL_URL,
  visibleMeshNames,
  selectedMeshNames,
  onSelect,
}: SkeletonCanvasProps) {
  const controlsRef = useRef<OrbitControlsImpl | null>(null);

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
        <SkeletonModel
          modelUrl={modelUrl}
          visibleMeshNames={visibleMeshNames}
          selectedMeshNames={selectedMeshNames}
          onSelect={onSelect}
          controlsRef={controlsRef}
        />
      </Suspense>
      <OrbitControls ref={controlsRef} makeDefault minDistance={0.05} maxDistance={8} enableDamping />
    </Canvas>
  );
}
