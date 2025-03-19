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
  padding?: string | undefined;
  fontSize: string | undefined;
};

const Button = ({
  children,
  className,
  variant,
  color,
  padding,
  fontSize,
}: ButtonProps) => {
  return (
    <ButtonMUI
      className={`cursor-pointer montserrat ${className || ""}`}
      variant={variant || "text"}
      color={color || "primary"}
      sx={{ padding: padding || "", fontSize: fontSize || "" }}
    >
      {children}
    </ButtonMUI>
  );
};

export default Button;
