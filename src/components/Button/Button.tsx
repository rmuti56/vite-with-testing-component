import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./button.css";

export type ButtonSizeOption = "small" | "medium" | "large";
export type ButtonColorOption = "default" | "primary" | "secondary";

export type ButtonProps = {
  children?: ReactNode;
  size?: ButtonSizeOption;
  color?: ButtonColorOption;
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
    <button className={classes} data-testid="base-button" {...restProps}>
      {children}
    </button>
  );
};

export default Button;
