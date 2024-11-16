import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef(null);
  const revealerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const divs = useRef(null);
  const div2 = useRef(null);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 1, 100));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const tl = gsap.timeline();

      // Animation for the first text
      tl.fromTo(
        text1Ref.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      )
        .to(text1Ref.current, { opacity: 1, duration: 0.8 })
        .to(text1Ref.current, {
          y: -20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.inOut",
        });

      // Animation for the second text, starts after the first completes
      tl.fromTo(
        text2Ref.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.3 }
      )
        .to(text2Ref.current, { opacity: 1, duration: 0.8 })
        .to(text2Ref.current, {
          y: -20,
          opacity: 0,
          duration: 0.6,
          ease: "power3.inOut",
        });

      // Fade out the revealer when text animations complete

      tl.to(div2.current, {
        opacity: 0,
      });

      tl.to(divs.current, {
        duration: 0.5,
        rotate: 50,
        scale: 10,
        width: "100vw",
        height: "50vh",
        ease: "power1.in",
      });
      tl.to(revealerRef.current, {
        duration: 0,
        opacity: 0,
      });
      tl.to(divs.current, {
        opacity: 1,
        duration: 0.5,
        background: "transparent",
        rotate: 90,
        height: "100vh",
        ease: "power1.in",
      });

      tl.to(divs.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
        delay: 0,
        onComplete: () => {
          loaderRef.current.style.display = "none";
        },
      });
    }
  }, [progress]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 flex flex-col items-center  justify-center bg-transparent z-50 loader"
    >
      {/* Sequentially animated text elements */}
      <div
        ref={text1Ref}
        className="text-center opacity-0 absolute text-white z-10 text-2xl"
      >
        Loading your experience...
      </div>
      <div
        ref={text2Ref}
        className={`text-center z-10 opacity-0 absolute text-white text-2xl`}
      >
        Setting things up...
      </div>
      <div
        ref={divs}
        style={{ width: `${0.8 * progress}vw` }}
        className={`
          mt-10
          h-1
          bg-white
          absolute z-10
          `}
      ></div>
      <div
        ref={div2}
        className="w-full absolute z-[11] mt-[120px] h-20 bg-black "
      ></div>

      {/* Black revealer div */}
      <div
        ref={revealerRef}
        className="revealer absolute  top-0 left-0 w-full h-full bg-black"
      ></div>
    </div>
  );
};

export default Preloader;
