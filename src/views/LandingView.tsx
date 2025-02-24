import * as React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import "./landingView.scss";
import Button from "../components/elements/Button";

const LandingView = () => {
  return (
    <div className="xl:mt-[160px] mt-[100px] flex justify-center w-full">
      <div className="md:w-2/3 w-full relative flex flex-col items-start px-4">
        <h1 className="bebas-neue text-5xl xl:text-7xl md:text-5xl max-w-[800px] leading-12 xl:leading-16 mt-[100px]">
          Strony internetowe, landing page, wizytówki firmowe <br />z
          indywidualnym podejściem.
        </h1>
        <div className="mask-gradient absolute top-4 left-40 xl:left-200 md:left-100 h-[400px] w-[400px]">
          <AiOutlineGlobal size={400} color="#FFFFFF" className="globe-icon" />
        </div>
        <Button className="text-2xl p-4" variant="contained" color="primary">
          Zobacz więcej
        </Button>
      </div>
    </div>
  );
};

export default LandingView;
