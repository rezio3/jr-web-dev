import React from "react";
import logo from "../../img/logo.png";
import Button from "../elements/Button";
import "./navBarView.scss";

const NavBarView = () => {
  const buttons = [
    { label: "Home", className: "home-nav-btn" },
    { label: "Projekty", className: "projekty-nav-btn" },
    { label: "Wycena", className: "wycena-nav-btn" },
    { label: "Kontakt", className: "kontakt-nav-btn" },
  ];

  return (
    <div className="p-1 xl:w-2/4 lg:w-3/4 w-full mt-2 md:mt-4">
      <nav className="w-full flex justify-between items-center">
        {buttons.map((button, index) => (
          <>
            <Button
              className={`md:text-5xl text-md nav-btn ${button.className}`}
              variant="text"
            >
              {button.label}
            </Button>
            {index === 1 /* Indicates the middle of the array. */ && (
              <img src={logo} alt="jr-logo" width={70} className="nav-logo" />
            )}
          </>
        ))}
      </nav>
    </div>
  );
};

export default NavBarView;
