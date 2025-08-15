import type { Meta, StoryObj } from "@storybook/react-vite";

import React from "react";

import { Typography } from "../typography";

import "@/styles/interior.css";

const meta = {
  title: "Components/Typography",
  parameters: {
    layout: "centered",
  },
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is default typography",
  },
};

export const H1: Story = {
  render: () => <Typography.h1>Heading 1</Typography.h1>,
};

export const H2: Story = {
  render: () => <Typography.h2>Heading 2</Typography.h2>,
};

export const H3: Story = {
  render: () => <Typography.h3>Heading 3</Typography.h3>,
};

export const H4: Story = {
  render: () => <Typography.h4>Heading 4</Typography.h4>,
};

export const H5: Story = {
  render: () => <Typography.h5>Heading 5</Typography.h5>,
};

export const Body: Story = {
  render: () => <Typography.body>This is body text</Typography.body>,
};

export const Small: Story = {
  render: () => <Typography.small>This is small text</Typography.small>,
};

export const Caption: Story = {
  render: () => <Typography.caption>This is caption text</Typography.caption>,
};

export const Muted: Story = {
  render: () => <Typography.muted>This is muted text</Typography.muted>,
};

export const WithWeight: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography weight="light">Light weight text</Typography>
      <Typography weight="normal">Normal weight text</Typography>
      <Typography weight="medium">Medium weight text</Typography>
      <Typography weight="semibold">Semibold weight text</Typography>
      <Typography weight="bold">Bold weight text</Typography>
    </div>
  ),
};

export const WithStyleType: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography styleType="italic">Italic text</Typography>
      <Typography styleType="underline">Underlined text</Typography>
      <Typography styleType="strike">Strikethrough text</Typography>
    </div>
  ),
};
