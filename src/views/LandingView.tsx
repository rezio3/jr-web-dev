import "./landingView.scss";
import HeaderSection from "./sections/HeaderSection";
import PortfolioSection from "./sections/PortfolioSection";

const LandingView = () => {
  return (
    <div className="xl:mt-[160px] mt-[100px] flex justify-center w-full">
      <HeaderSection />
      <PortfolioSection />
    </div>
  );
};

export default LandingView;
