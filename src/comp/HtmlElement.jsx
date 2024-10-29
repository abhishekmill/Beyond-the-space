import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

const HtmlElement = () => {
  const scroll = useScroll();
  const [scrollx, setScrollx] = useState(10);
  useFrame(() => {
    setScrollx(scroll.offset * 3000);
  });

  const cardref = useRef();
  const [cardOpacity, setCardOpacity] = useState(0);

  const handleScroll = () => {
    if (scrollx >= 300 && scrollx <= 500 && cardOpacity <= 1) {
      setCardOpacity(cardOpacity + scrollx / 6000);
      console.log(cardOpacity);
    } else if (cardOpacity > 0) {
      setCardOpacity(cardOpacity - scrollx / 4000);
      console.log(cardOpacity);
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
          className=" w-fit  text-3xl h-fit pl-5  mt-[36vh] justify-center items-center flex  tracking-widest  "
          style={{
            opacity: `${1 - scrollx / 2}`,
          }}
        >
          {" "}
          Mern Academy Presents{" "}
        </div>

        <div
          className="mt-[40vh]  fixed text-center justify-center  flex"
          style={{
            gap: `${scrollx}vh`,
            opacity: `${1 - scrollx / 40}`,
          }}
        >
          <h1 className="text-[20vh] text-red-800 px-36  w-fit">space </h1>
          <h1 className="text-[20vh] text-yellow-500 px-36 w-fit">Boys</h1>
        </div>
      </div>
      {/* cards start */}
      <div
        ref={cardref}
        className=" gap-10 mt-[70vh] flex flex-col   opacity-0 "
      >
        <h2 className="h-fit   text-white text-center font-bebas-neue tracking-widest text-4xl pb-10">
          Abhishek-Verma
        </h2>
        <div className="flex h-fit  justify-evenly">
          <div className="border shadow-yellow-200  text-white    max-w-[500px] rounded-lg  max-h-[300px]">
            <div>
              <h1 className="font-bebas-neue h-fit text-red-600 text-4xl p-5 tracking-widest text-center border-b">
                Tech-Stack
              </h1>
              <p className="h-fit p-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem nesciunt culpa blanditiis iure impedit ad nulla qui
                labore, nisi cum sunt mollitia porro esse ipsam saepe accusamus
                suscipit, quasi delectus.
              </p>
            </div>
          </div>
          <div className="border shadow-yellow-200    text-white max-w-[500px] rounded-lg  max-h-[300px]">
            <div>
              <h1 className="font-bebas-neue text-red-600 h-fit text-4xl p-5 tracking-widest text-center border-b">
                projects
              </h1>
              <p className="h-fit p-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem nesciunt culpa blanditiis iure impedit ad nulla qui
                labore, nisi cum sunt mollitia porro esse ipsam saepe accusamus
                suscipit, quasi delectus.
              </p>
            </div>
          </div>
        </div>
        gap-10{" "}
        <div className="flex h-fit  justify-evenly">
          <div className="border shadow-yellow-200    text-white max-w-[500px] rounded-lg  max-h-[300px]">
            <div>
              <h1 className="font-bebas-neue h-fit text-4xl text-yellow-400 p-5 tracking-widest text-center border-b">
                Skills
              </h1>
              <p className="h-fit p-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem nesciunt culpa blanditiis iure impedit ad nulla qui
                labore, nisi cum sunt mollitia porro esse ipsam saepe accusamus
                suscipit, quasi delectus.
              </p>
            </div>
          </div>
          <div className="border  shadow-yellow-200     text-white max-w-[500px] rounded-lg  max-h-[300px]">
            <div>
              <h1 className="font-bebas-neue h-fit text-yellow-400 text-4xl p-5 tracking-widest text-center border-b">
                Socials
              </h1>
              <p className="h-fit p-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem nesciunt culpa blanditiis iure impedit ad nulla qui
                labore, nisi cum sunt mollitia porro esse ipsam saepe accusamus
                suscipit, quasi delectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  );
};

export default HtmlElement;
