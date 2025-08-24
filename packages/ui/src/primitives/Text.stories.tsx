import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Primitives/Text",
  component: Text,
  parameters: { layout: "centered" }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Body: Story = { args: { children: "It plans. It posts. You teach.", size: "md" } };
export const Secondary: Story = {
  args: { children: "Teacher‑first, always.", size: "md", tone: "secondary" }
};

