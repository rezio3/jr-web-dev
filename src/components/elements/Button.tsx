import React from "react";

export type ButtonProps = {
  label: string;
  className: string;
};

const Button = ({ label, className }: ButtonProps) => {
  return (
    <button className={`cursor-pointer sm:px-5 ${className}`}>{label}</button>
  );
};

export default Button;
