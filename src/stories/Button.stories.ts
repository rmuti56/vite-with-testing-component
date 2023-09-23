import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";
import {
  ButtonColorOption,
  ButtonSizeOption,
} from "../components/Button/Button";

const sizeOptions: ButtonSizeOption[] = ["small", "medium", "large"];
const colorOptions: ButtonColorOption[] = ["default", "primary", "secondary"];

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { options: colorOptions, defaultValue: "default" },
    size: { options: sizeOptions, defaultValue: "medium" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    color: "default",
    size: "medium",
    children: "Button",
  },
};

export const ColorPrimary: Story = {
  args: {
    color: "primary",
    children: "Button",
  },
};

export const ColorSecondary: Story = {
  args: {
    children: "Button",
    color: "secondary",
  },
};

export const SizeLarge: Story = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const SizeSmall: Story = {
  args: {
    size: "small",
    children: "Button",
  },
};
