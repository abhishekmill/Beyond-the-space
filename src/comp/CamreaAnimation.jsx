import { useEffect } from "react";
import gsap from "gsap";
import { degToRad } from "three/src/math/MathUtils";
import { useThree } from "@react-three/fiber";

const CameraAnimation = ({ scroll }) => {
  const { camera } = useThree();

  useEffect(() => {
    // Use a GSAP context to manage animations
    const context = gsap.context(() => {
      // Animate based on scroll value
      if (scroll > 5) {
        gsap.to(camera.rotation, {
          z: degToRad(180),
          duration: 5, // Duration of the animation
          ease: "power2.inOut",
          onUpdate: () => camera.updateProjectionMatrix(),
        });

        gsap.to(camera, {
          fov: 50,
          duration: 5, // Match duration with rotation
          ease: "power2.inOut",
          onUpdate: () => camera.updateProjectionMatrix(),
        });
      } else {
        gsap.to(camera.rotation, {
          z: degToRad(0),
          duration: 5, // Duration of the animation
          ease: "power2.inOut",
          onUpdate: () => camera.updateProjectionMatrix(),
        });

        gsap.to(camera, {
          fov: 75,
          duration: 5,
          ease: "power2.inOut",
          onUpdate: () => camera.updateProjectionMatrix(),
        });
      }
    });

    // Cleanup GSAP animations on unmount
    return () => context.revert();
  }, [scroll, camera]);

  return null;
};

export default CameraAnimation;
