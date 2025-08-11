import type { Meta, StoryObj } from "@storybook/react-vite";

import React from "react";

import { Button } from "../button";

import "@/styles/interior.css";

const meta = {
  title: "Components/Button",
  parameters: {
    layout: "centered",
  },
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};
