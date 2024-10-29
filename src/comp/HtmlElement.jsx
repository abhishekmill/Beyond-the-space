import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

const HtmlElement = ({ isMobile }) => {
  const scroll = useScroll();
  const [scrollx, setScrollx] = useState(10);
  useFrame(() => {
    setScrollx(scroll.offset * 3000);
  });

  const cardref = useRef();
  const [cardOpacity, setCardOpacity] = useState(0);

  const handleScroll = () => {
    if (isMobile) {
      if (scrollx >= 200 && scrollx <= 1300 && cardOpacity <= 1) {
        setCardOpacity(cardOpacity + scrollx / 7000);
      } else if (cardOpacity > 0) {
        setCardOpacity(cardOpacity - scrollx / 10000);
      }
    } else if (scrollx >= 250 && scrollx <= 700 && cardOpacity <= 1) {
      setCardOpacity(cardOpacity + scrollx / 7000);
    } else if (cardOpacity > 0) {
      setCardOpacity(cardOpacity - scrollx / 8000);
    }
  };
  useEffect(() => {
    cardref.current.style.opacity = cardOpacity;
    handleScroll();
    // console.log(scrollx);
  }, [scrollx]);

  return (
    <Scroll html>
      <div className="bg-transparent text-white justify-center w-full font-bebas-neue flex absolute z-10">
        <div
          className=" w-fit  md:text-3xl  text-xl  h-fit pl-5  mt-[36vh] justify-center items-center flex  tracking-widest  "
          style={{
            opacity: `${1 - scrollx / 2}`,
          }}
        >
          {" "}
          Mern Academy Presents{" "}
        </div>

        <div
          className="mt-[40vh]  fixed text-center justify-center  flex  "
          style={{
            gap: `${scrollx}vh`,
            opacity: `${1 - scrollx / 40}`,
          }}
        >
          <h1 className="md:text-[20vh] text-6xl text-red-800   pt-48 px-5 md:pt-0 md:px-36  w-fit">
            space{" "}
          </h1>
          <h1 className="md:text-[20vh] text-6xl  text-yellow-500 pt-48 px-5 md:pt-0 md:px-36 w-fit">
            Dev.s
          </h1>
        </div>
      </div>
      {/* cards start */}
      <div
        ref={cardref}
        className=" gap-10 mt-[70vh] flex flex-col  md:opacity-0 opacity-100 "
      >
        <h2 className="h-fit   text-slate-200 text-center font-bebas-neue tracking-widest text-4xl md:pb-10  ">
          Abhishek-Verma
        </h2>
        <div className="flex h-fit gap-10  md:flex-row  flex-col px-5 justify-evenly">
          <div className="border shadow-yellow-200 md:bg-transparent bg-opacity-55 text-slate-200     max-w-[500px] rounded-lg  max-h-[300px]">
            <div>
              <h1 className="font-bebas-neue h-fit text-red-600 md:text-4xl text-xl p-2 md:p-3   tracking-widest text-center border-b">
                Tech-Stack
              </h1>
              <p className="md:h-fit max-h-32 h-fit   overflow-hidden  md:p-5 p-2 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem nesciunt
              </p>
            </div>
          </div>
          <div className="border shadow-yellow-200   md:bg-transparent bg-opacity-55   text-slate-200 max-w-[500px] rounded-lg  max-h-[300px]">
            <div>
              <h1 className="font-bebas-neue h-fit text-red-600 md:text-4xl text-xl p-2 md:p-3   tracking-widest text-center border-b">
                projects
              </h1>
              <p className="md:h-fit max-h-32 h-fit   overflow-hidden  md:p-5 p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem nesciunt culpa blanditiis .
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-fit gap-10  md:flex-row  flex-col px-5 justify-evenly">
          <div className="border shadow-yellow-200   md:bg-transparent bg-opacity-55   text-slate-200 max-w-[500px] rounded-lg  max-h-[300px] ">
            <div>
              <h1 className="font-bebas-neue h-fit text-yellow-400 md:text-4xl text-xl p-2 md:p-3   tracking-widest text-center border-b">
                Skills
              </h1>
              <p className="md:h-fit max-h-32 h-fit   overflow-hidden  md:p-5 p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem nesciunt culpa blanditiis iure impedit ad
              </p>
            </div>
          </div>
          <div className="border  shadow-yellow-200   md:bg-transparent bg-opacity-55    text-slate-200 max-w-[500px] rounded-lg  max-h-[300px]">
            <div>
              <h1 className="font-bebas-neue h-fit text-yellow-400 md:text-4xl text-xl p-2 md:p-3   tracking-widest text-center border-b">
                Socials
              </h1>
              <p className="md:h-fit max-h-32 h-fit   overflow-hidden  md:p-5 p-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem nesciunt culpa blanditiis iure impedit ad nulla qui
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio start  */}
      {/* <Portolio /> */}
    </Scroll>
  );
};

export default HtmlElement;

const Portolio = () => {
  return (
    <div className="   w-full  flex  flex-col ">
      <div className="flex h-fit justify-evenly gap-36">
        <div className="max-w-96 h-48 border"></div>
        <div className="max-w-96 h-48 border"></div>
      </div>
      <div className="flex h-fit mt-36 justify-evenly gap-36">
        <div className="max-w-96 h-48 border"></div>
        <div className="max-w-96 h-48 border"></div>
      </div>
    </div>
  );
};
