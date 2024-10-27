import React from "react";
import { useGLTF } from "@react-three/drei";

export function Stone(props) {
  const { nodes, materials } = useGLTF("/stone.glb");

  // Increase metalness of the material
  materials.material_0.metalness = 0.4; // Set to 1 for full metalness or adjust as desired
  materials.material_0.roughness = 0.8; // Optional: Decrease roughness for a more reflective surface

  return (
    <group {...props} dispose={null} scale={[0.01, 0.02, .01]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.material_0}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/stone.glb");
