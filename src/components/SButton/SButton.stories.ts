  import type {Meta, StoryObj} from '@storybook/react';

  import  SButton  from './SButton';
  
  const meta: Meta<typeof SButton> = {
    component:SButton,
    title: 'Buttons/SButton',
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
  };
  
  export default meta;
  type Story = StoryObj<typeof SButton>;
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  
  export const Primary: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
      children: 'Primary Button',
      className:  'hover:bg-sky-700  bg-blue-500',
    },
  };

  export const PrimaDisabled: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
      children: 'Primary Disabled',
      className:  'text-white bg-blue-400 dark:bg-blue-500 cursor-not-allowed font-medium rounded-lg text-sm px-5 py-2.5 text-center',
    },
  };
  
  export const Secondary: Story = {
    args: {
      children: 'Secondary',
      className: 'py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-blue-700 focus:outline-none bg-white rounded-lg border border-blue-900 hover:bg-white hover:text-blue-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white',
      //'text-blue-500 hover:text-blue-900 border-2 border-blue-900',
    },
  };
  
  export const Positive: Story = {
    args: {
      children: 'Positive Button',
      className: 'bg-lime-700 hover:bg-lime-800',
    },
  };

  export const Negative: Story = {
    args: {
      children: 'Negative Button',
      className: 'bg-amber-700 hover:bg-amber-800',
    },
  };

