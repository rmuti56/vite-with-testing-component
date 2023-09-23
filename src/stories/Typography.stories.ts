import type { Meta, StoryObj } from "@storybook/react";

import Typography from "../components/Typography";

import { TypographyVariantOption } from "../components/Typography/Typography";

const variantOptions: TypographyVariantOption[] = [
  "body1",
  "body2",
  "caption",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
];

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      options: variantOptions,
      defaultValue: "body1",
      control: "select",
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Body1: Story = {
  args: {
    variant: "body1",
    children: "Typography",
  },
};

export const Body2: Story = {
  args: {
    variant: "body2",
    children: "Typography",
  },
};

export const Caption: Story = {
  args: {
    variant: "caption",
    children: "Typography",
  },
};

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Typography",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Typography",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "Typography",
  },
};
export const H4: Story = {
  args: {
    variant: "h4",
    children: "Typography",
  },
};

export const H5: Story = {
  args: {
    variant: "h5",
    children: "Typography",
  },
};

export const H6: Story = {
  args: {
    variant: "h6",
    children: "Typography",
  },
};
