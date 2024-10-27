import { ScrollControls, useScroll } from "@react-three/drei";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { TextureLoader } from "three";
import { Astronaut } from "./Astro";

export function BallLight() {
  const scroll = useScroll();
  const { camera } = useThree();
  const [amountScroll, setAmountScroll] = useState(-1);
  const [distanceFactor, setDistanceFactor] = useState(3);
  const [scrollval, setScrollval] = useState(0);

  // camera.position.z = 3;
  useFrame(() => {
    camera.position.y = 22 - scroll.offset * 33;
    camera.lookAt(0, 22 - scroll.offset * 33, 0);
    setAmountScroll(22 - scroll.offset * 33);
    camera.updateProjectionMatrix();
  });
  useEffect(() => {
    let animationFrame;

    const targetFactor = scroll.offset * 10 > 3 ? 3 + scroll.offset * 7 : 3;
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
      camera.updateProjectionMatrix();

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
        <pointLight
          position={[0, amountScroll, 0]}
          intensity={5}
          distance={8}
          color="#a6d5fc"
          castShadow
        />

        <group
          position={[0, amountScroll, 0]}
          rotation={[0, Math.sin(distanceFactor), 0]}
        >
          <Astronaut
            position={[0, -1, 0]}
            rotation={[0, 0, 0]}
            scale={[0.5, 0.5, 0.5]}
          />
        </group>
      </ScrollControls>
    </>
  );
}
