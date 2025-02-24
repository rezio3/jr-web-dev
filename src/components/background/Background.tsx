import React, { useLayoutEffect, useRef } from "react";
import "./background.scss";

const Background = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const glowElement = glowRef.current;
    if (!glowElement) return;

    const handleAnimationEnd = () => {
      glowElement.classList.remove("glow");
      glowElement.classList.add("glowLoop");
    };

    glowElement.addEventListener("animationend", handleAnimationEnd);

    return () => {
      glowElement.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className="bg-landing-container absolute h-[500px] xl:w-full sm:w-[1300px] w-[1000px] mt-[150px] md:mt-[200px]">
      <div
        ref={glowRef}
        className="glow absolute w-3/4 h-[100px] rounded-[50%]"
      />
      <div className="glow-blink absolute w-1/4 h-[100px] rounded-[50%]" />
      <div className="glow-blink2 absolute w-1/4 h-[100px] rounded-[50%]" />
    </div>
  );
};

export default Background;
