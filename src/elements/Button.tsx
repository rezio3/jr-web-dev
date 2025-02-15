import React from "react";
import { ButtonProps } from "../types";

const Button = ({ label, className }: ButtonProps) => {
  return <button className={className}>{label}</button>;
};

export default Button;
