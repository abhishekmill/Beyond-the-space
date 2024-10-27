import { Text, useScroll } from "@react-three/drei";
import React, { useEffect } from "react";

const TextOverlay = () => {
  const scroll = useScroll();
  console.log(scroll.offset);


  useEffect

  return (
    <group>
      <Text
        position={[0, 22, 0]}
        fontSize={1}
        color="red"
        maxWidth={200}
        lineHeight={1.5}
      >
        {" "}
        Abhi shek
      </Text>
      <Text
        position={[0, 21, 0]}
        fontSize={1}
        color="blue"
        maxWidth={200}
        lineHeight={1.5}
      >
        {" "}
        is Here
      </Text>
    </group>
  );
};

export default TextOverlay;
