import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button/Button";

describe("Button Component", () => {
  it("renders button class", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");

    expect(buttonElement).toHaveClass("button");
  });

  it("renders with default variant size and color", () => {
    const dataTestId = "defaultButton";

    render(<Button data-testid={dataTestId} />);
    const buttonElement = screen.getByTestId(dataTestId);

    expect(buttonElement).toHaveClass("size-medium");
    expect(buttonElement).toHaveClass("color-default");
  });

  it("renders with different variant sizes", () => {
    const sizes: ["small", "medium", "large"] = ["small", "medium", "large"];

    sizes.forEach((size) => {
      const dataTestId = `button-id-${size}`;

      render(<Button size={size} data-testid={dataTestId} />);
      const buttonElement = screen.getByTestId(dataTestId);
      expect(buttonElement).toHaveClass(`size-${size}`);
    });
  });

  it("renders with different variant colors", () => {
    const colors: ["default", "primary", "secondary"] = [
      "default",
      "primary",
      "secondary",
    ];

    colors.forEach((color) => {
      const dataTestId = `button-id-${color}`;

      render(<Button color={color} data-testid={dataTestId} />);
      const buttonElement = screen.getByTestId(dataTestId);
      expect(buttonElement).toHaveClass(`color-${color}`);
    });
  });
});
