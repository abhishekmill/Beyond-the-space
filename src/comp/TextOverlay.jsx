import { Image, Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { button, Leva, useControls } from "leva";
import React, { useEffect, useRef, useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";

const ImgOverlay = ({ isMobile }) => {
  const imgRef = useRef();
  const position = isMobile ? [9, 25, -5] : [16, 27, -7];

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.position.set(...position);
    }
  }, [position]);
  return (
    <group>
      <Image
        ref={imgRef}
        rotation={[degToRad(0), degToRad(0), degToRad(130)]}
        url="./earthAe.png"
        opacity={1}
        transparent
        scale={[28, 17, 0]}
        // position={[16, 27, -7]}
      />
    </group>
  );
};

export default ImgOverlay;
