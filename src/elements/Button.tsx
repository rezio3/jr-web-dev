import React from "react";
import { ButtonProps } from "../types";

const Button = ({ label, className }: ButtonProps) => {
  return (
    <button className={`cursor-pointer sm:px-5 ${className}`}>{label}</button>
  );
};

export default Button;
