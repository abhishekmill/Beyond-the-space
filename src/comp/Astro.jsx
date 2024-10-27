import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/astronaut.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Check if there are any actions and play the first available animation
    if (actions && animations.length > 0) {
      actions[animations[0].name].play();
    }
  }, [actions, animations]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.687}
        >
          <group
            name="a2d102a266ba49a28c0b4ae14e745f31fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="glow"
                    geometry={nodes.Object_9.geometry}
                    material={materials.Astronaut_mat}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials["Mat.1"]}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials["Mat.4"]}
                    skeleton={nodes.Object_11.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials["Mat.3"]}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials["Mat.2"]}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <group name="Object_6" position={[0, 0, -1.878]} />
                  <group name="Subdivision_Surface_1">
                    <group name="Astronaut_mesh_1" position={[0, 0, -1.878]} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/astronaut.glb");
