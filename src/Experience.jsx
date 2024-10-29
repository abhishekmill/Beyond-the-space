import {
  Environment,
  OrbitControls,
  Plane,
  ScrollControls,
  Sparkles,
  Sphere,
  Stars,
  Text,
  Text3D,
} from "@react-three/drei";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Stone } from "./comp/Stone";
import { degToRad } from "three/src/math/MathUtils.js";
import { BallLight } from "./comp/BallLight";
import Efect from "./comp/Efect";
import { Moon } from "./comp/Moon";
import ImgOverlay from "./comp/TextOverlay";
import HtmlElement from "./comp/HtmlElement";
const Experience = () => {
  const scrollContainerRef = useRef();

  return (
    <div ref={scrollContainerRef} className="h-screen">
      <Canvas className="w-full  bg-black ">
        <ScrollControls damping={2} pages={4}>
          <ambientLight intensity={0.2} />
          <group>
            <group position={[0.3, 0, 0]}>
              <Stone
                rotation={[degToRad(0), degToRad(40), degToRad(0)]}
                position={[-4, 0, 0]}
              />
              <Stone
                rotation={[degToRad(0), degToRad(0), degToRad(0)]}
                position={[-4, -12, 0]}
              />
            </group>
            <group position={[-0.8, 0, 0]}>
              <Stone
                position={[3.8, 0, 0]}
                rotation={[degToRad(0), degToRad(0), degToRad(0)]}
              />
              <Stone
                position={[4.0, -11, 0]}
                rotation={[degToRad(-3), degToRad(14), degToRad(0)]}
              />
            </group>
          </group>
          {/* <TextOverlay /> */}
          <HtmlElement />
          <directionalLight
            position={[0, 9, -1]} // Position above the scene
            intensity={0.2} // Adjust intensity as needed
            color={"red"}
            castShadow // Optional: Enable shadow casting
          />
          <directionalLight
            lookAt={[0, 0, 0]}
            position={[0, -14, 0]} // Position above the scene
            intensity={0.9} // Adjust intensity as needed
            color={"white"}
            castShadow
          />

          <BallLight />
          <ImgOverlay />
          <Moon />
          {/* <Environment preset="city" /> */}
          {/* <OrbitControls /> */}
          {/* <mesh position={[0, 0, -5]} scale={[30, 30, 0]}>
            <planeGeometry />

            <meshStandardMaterial />
          </mesh> */}
          {/* <Efect /> */}
          <Sparkles scale={[3, 18, 0]} size={1.5} count={50} />
        </ScrollControls>
        {/* <Background /> */}
        <Stars fade count={1000}
        factor={4} speed={.6} saturation={13}
        />
      </Canvas>
    </div>
  );
};

export default Experience;

// function Background() {
//   const THREE = useThree();
//   const texture = useLoader(THREE.TextureLoader, spaceTexture);
//   return (
//     <Sphere args={[100, 64, 64]} scale={[-1, 1, 1]}>
//       <meshBasicMaterial map={texture} side={THREE.BackSide} />
//     </Sphere>
//   );
// }