import { Scroll } from "@react-three/drei";
import React from "react";

const HtmlElement = () => {
  return (
    <Scroll html>
      <div className="bg-transparent text-white w-full absolute z-10 top-[100vh] h-96">
        hello guys
      </div>
    </Scroll>
  );
};

export default HtmlElement;
