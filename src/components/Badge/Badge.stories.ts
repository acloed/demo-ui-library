
import { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "Marbella/Badge",
   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
   tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Story: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
      color: '',
      backgroundColor: '',
      children: 'Text',
    },
  };









