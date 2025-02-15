import React from "react";
import "./BgLanding.scss";

const BgLanding = () => {
  return (
    <>
      <div className="bg-landing-container absolute xl:w-full sm:w-[1300px] w-[1000px] mt-[200px]">
        <div className="glow absolute w-3/4 h-[100px] rounded-[50%]" />
      </div>
    </>
  );
};

export default BgLanding;
