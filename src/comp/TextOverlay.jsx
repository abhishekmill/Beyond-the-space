import { Image, Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { button, Leva, useControls } from "leva";
import React, { useEffect, useState } from "react";
import { degToRad } from "three/src/math/MathUtils.js";

const ImgOverlay = () => {
  const scroll = useScroll();

  return (
    <group>
      <Image
        rotation={[degToRad(0), degToRad(0), degToRad(130)]}
        url="./earthAe.png"
        opacity={1}
        transparent
        scale={[28, 17, 0]}
        position={[16, 27, -7]}
      />
    </group>
  );
};

export default ImgOverlay;
