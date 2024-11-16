import { useEffect, useRef } from "react";
import Experience from "./Experience";
import { ScrollTrigger } from "gsap/all";
import Preloader from "./comp/Preloader";

const App = () => {
  return (
    <>
      <Preloader />
      <Experience />
    </>
  );
};

export default App;
