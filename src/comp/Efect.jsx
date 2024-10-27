import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import React from "react";

const Efect = () => {
  return (
    <EffectComposer>
      <Vignette darkness={0.5} />
      <Bloom />
    </EffectComposer>
  );
};

export default Efect;
