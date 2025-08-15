import type { Meta, StoryObj } from "@storybook/react-vite";

import React from "react";

import { Popover, PopoverContent, PopoverTrigger } from "../popover";

import "@/styles/interior.css";

const meta = {
  title: "Components/Popover",
  parameters: {
    layout: "centered",
  },
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Open popover</PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="width">Width</label>
              <input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8 px-3 text-sm border border-input bg-background"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="maxWidth">Max. width</label>
              <input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8 px-3 text-sm border border-input bg-background"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="height">Height</label>
              <input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8 px-3 text-sm border border-input bg-background"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <label htmlFor="maxHeight">Max. height</label>
              <input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8 px-3 text-sm border border-input bg-background"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
