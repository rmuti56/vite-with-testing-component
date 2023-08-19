import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./button.css";

type ButtonProps = {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  color?: "default" | "primary" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  size = "medium",
  color = "default",
  ...restProps
}: ButtonProps) => {
  const classes = classNames("button", className, {
    [`size-${size}`]: !!size,
    [`color-${color}`]: !!color,
  });

  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
