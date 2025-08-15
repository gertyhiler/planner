import type { Meta, StoryObj } from "@storybook/react-vite";

import React from "react";

import { Separator } from "../separator";

import "@/styles/interior.css";

const meta = {
  title: "Components/Separator",
  parameters: {
    layout: "centered",
  },
  component: Separator,
  tags: ["autodocs"],
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-4">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: () => (
    <div className="flex h-20 items-center space-x-4">
      <div>Content</div>
      <Separator orientation="vertical" />
      <div>Content</div>
    </div>
  ),
};
