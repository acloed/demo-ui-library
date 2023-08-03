
import { Meta, StoryObj } from "@storybook/react";
import  SBadge  from './SBadge';

const meta: Meta<typeof SBadge> = {
  component: SBadge,
  title: "SBadge/SBadge",
   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
   tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SBadge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

export const Story: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
      
      children: 'Text',
      
    },
  };









