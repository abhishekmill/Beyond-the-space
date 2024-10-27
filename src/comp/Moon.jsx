import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

export function Moon(props) {
  const { nodes, materials } = useGLTF("/moonHal.glb");
  const moonRef = useRef();

  // Assign the moon to layer 1
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    moonRef.current.rotation.y = time * 0.03; // Adjust 0.5 for rotation speed
  });
  materials.material.mtalness = 0.5;
  materials.material.roughness = 0.8;
  materials.material.color.multiplyScalar(4);

  return (
    <>
      <group
        {...props}
        ref={moonRef}
        scale={[0.002, 0.002, 0.002]}
        position={[0, -15, 0]}
        dispose={null}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MareMoscoviense_LP_1_0.geometry}
          material={materials.material}
          position={[0, -2566, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/moonHal.glb");
