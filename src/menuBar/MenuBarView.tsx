import React from "react";
import logo from "../img/logo.png";
import Button from "../elements/Button";

const MenuBarView = () => {
  const buttons = ["Home", "Projekty", "Wycena", "Kontakt"];

  return (
    <div className="p-1 xl:w-2/4 lg:w-3/4 w-full">
      <nav className="w-full flex justify-between">
        {buttons.map((button, index) => (
          <>
            <Button label={button} className="text-xl" />
            {index === 1 /* Indicates the middle of the array. */ && (
              <img src={logo} alt="jr-logo" width={70} />
            )}
          </>
        ))}
      </nav>
    </div>
  );
};

export default MenuBarView;
