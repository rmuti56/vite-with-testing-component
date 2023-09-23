// src/components/Typography.tsx
import React from "react";
import classNames from "classnames";
import "./Typography.css";

export type TypographyVariantOption =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "caption";

type TypographyProps = {
  variant?: TypographyVariantOption;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const variantToElement = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body1: "p",
  body2: "p",
  caption: "span",
};

const Typography = ({
  variant = "body1",
  className,
  children,
  ...restProps
}: TypographyProps) => {
  const classes = classNames("typography", className);
  const Element = variantToElement[variant];

  return (
    <Element className={classes} {...restProps}>
      {children}
    </Element>
  );
};

export default Typography;
