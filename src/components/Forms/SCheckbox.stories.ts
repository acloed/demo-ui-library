import type {Meta, StoryObj} from '@storybook/react';

import  SCheckbox from './SCheckbox';

const meta: Meta<typeof SCheckbox> = {
  component: SCheckbox,
  title: 'Input/Checkbox',
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  
};

export default meta;

type Story = StoryObj<typeof SCheckbox>;

export const Base: Story = {
    args : {
      
  }
};