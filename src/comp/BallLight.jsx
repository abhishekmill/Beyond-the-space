import {
  Html,
  Scroll,
  ScrollControls,
  Text,
  useScroll,
} from "@react-three/drei";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { AudioLoader, TextureLoader } from "three";
import { Astronaut } from "./Astro";
import { degToRad } from "three/src/math/MathUtils.js";
import Sound from "./Sound";

export function BallLight() {
  const scroll = useScroll();
  const { camera } = useThree();
  const [amountScroll, setAmountScroll] = useState(-1);
  const [distanceFactor, setDistanceFactor] = useState(3);
  const targetY = useRef(18);
  const lerpFactor = 0.1;

  useFrame(() => {
    const newY = 18 - scroll.offset * 33;
    targetY.current += (newY - targetY.current) * lerpFactor;
    camera.position.y = targetY.current;
    camera.lookAt(0, targetY.current, 0);
    setAmountScroll(targetY.current);

    if (true) {
      const targetRotationZ = degToRad(scroll.offset * 10 * 180);
      camera.rotation.z += (targetRotationZ - camera.rotation.z) * 0.1;
      // camera.rotation.z += degToRad(180);
    }

    camera.updateProjectionMatrix();
  });
  useEffect(() => {
    let animationFrame;

    const targetFactor = scroll.offset * 7 > 3 ? 3 + scroll.offset * 7 : 3;
    const animateDistance = () => {
      setDistanceFactor((prev) => {
        const step = 0.01; // Adjust step for smoothness
        const newValue =
          prev < targetFactor
            ? Math.min(prev + step, targetFactor)
            : Math.max(prev - step, targetFactor);
        return newValue;
      });

      camera.position.z = distanceFactor;
      // camera.updateProjectionMatrix();
      // console.log(-12 + distanceFactor);

      if (Math.abs(distanceFactor - targetFactor) > 0.01) {
        animationFrame = requestAnimationFrame(animateDistance);
      }
    };

    animationFrame = requestAnimationFrame(animateDistance);
    return () => cancelAnimationFrame(animationFrame);
  }, [scroll.offset, distanceFactor, camera]);

  return (
    <>
      {/* Point light to illuminate the scene */}
      <ScrollControls>
        <Scroll html>
          <div
            className=" text-yellow-600 tracking-wider pointer-events-none font-bebas-neue text-center text-3xl mt-[70vh] w-[100vw] h-screen capitalize"
            style={{
              opacity: -9 + distanceFactor,
            }}
          >
            "Building the web, one line at a time.
            <div className="w-full font-sans  text-sm text-white h-10">
              <span>github.com/abhishekmill </span>
              <span>linkedin.com/in/abhishekmill</span>
            </div>
          </div>
        </Scroll>
        <pointLight
          position={[0, amountScroll, 0]}
          intensity={5}
          distance={8}
          color="blue"
          castShadow
        />
        <group
          position={[0, amountScroll, 0]}
          rotation={[0, Math.sin(distanceFactor), 0]}
        >
          <Astronaut position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]} />
        </group>
        
      </ScrollControls>
    </>
  );
}
