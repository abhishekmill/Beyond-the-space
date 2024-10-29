import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import React from "react";

const Efect = () => {
  return (
    <EffectComposer>
      <Vignette darkness={0.34} />
      <Bloom intensity={0.2} />
    </EffectComposer>
  );
};

export default Efect;
