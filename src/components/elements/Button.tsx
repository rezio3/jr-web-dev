import React from "react";
import { Button as ButtonMUI } from "@mui/material";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "text" | "contained" | "outlined" | undefined;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
};

const Button = ({ children, className, variant, color }: ButtonProps) => {
  return (
    <ButtonMUI
      className={`cursor-pointer montserrat ${className || ""}`}
      variant={variant || "text"}
      color={color || "primary"}
    >
      {children}
    </ButtonMUI>
  );
};

export default Button;
