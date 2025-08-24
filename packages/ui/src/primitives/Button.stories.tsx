import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  parameters: { layout: "centered" }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: "Generate", variant: "primary" } };
export const Subtle: Story = { args: { children: "Secondary", variant: "subtle" } };
export const Ghost: Story = { args: { children: "Ghost", variant: "ghost" } };

