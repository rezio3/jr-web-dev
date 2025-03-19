import * as React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import Button from "../../components/elements/Button";

const HeaderSection = () => {
  return (
    <div className="md:w-2/3 w-full relative flex flex-col items-start px-4">
      <h1 className="bebas-neue text-5xl xl:text-7xl md:text-5xl max-w-[800px] leading-12 xl:leading-16 mt-[100px] mb-10">
        Strony internetowe, landing page, wizytówki firmowe <br />z
        indywidualnym podejściem.
      </h1>
      <span className="mb-10 text-gray-300">
        Masz pytania o proces realizacji strony lub chcesz poznać wycenę? <br />
        Napisz, a wspólnie dopasujemy najlepsze rozwiązanie dla Ciebie!
      </span>
      <div className="mask-gradient absolute top-4 left-40 xl:left-200 md:left-100 h-[400px] w-[400px]">
        <AiOutlineGlobal size={400} color="#FFFFFF" className="globe-icon" />
      </div>
      <Button
        variant="contained"
        color="primary"
        padding="10px 20px 10px 30px"
        fontSize="20px"
      >
        Bezpłatna konsultacja <BsArrowRightShort size={40} className="ml-3" />
      </Button>
    </div>
  );
};

export default HeaderSection;
