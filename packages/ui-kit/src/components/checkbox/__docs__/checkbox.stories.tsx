import type { Meta, StoryObj } from "@storybook/react-vite";

import React from "react";

import { Checkbox } from "../checkbox";

import "@/styles/interior.css";

const meta = {
  title: "Components/Checkbox",
  parameters: {
    layout: "centered",
  },
  component: Checkbox,
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};
