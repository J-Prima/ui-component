import { fn } from 'storybook/test';
import Button from './Button';
import { BUTTON_COLOR_OPTIONS, BUTTON_VARIANT_OPTIONS, BUTTON_SIZE_OPTIONS, BUTTON_WEIGHT_OPTIONS } from '../../types/Button.types';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: BUTTON_VARIANT_OPTIONS,
    },
    color: {
      control: 'select',
      options: BUTTON_COLOR_OPTIONS,
    },
    size: {
      control: 'select',
      options: BUTTON_SIZE_OPTIONS,
    },
    weight: {
      control: 'select',
      options: BUTTON_WEIGHT_OPTIONS,
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Primary Button',
    variant: 'contained',
    color: 'primary-main',
    size: 'md',
    weight: '700',
  },
};

export const Secondary = {
  args: {
    label: 'Secondary Button',
    variant: 'contained',
    color: 'secondary-main',
    size: 'md',
    weight: '500',
  },
};

export const Large = {
  args: {
    label: 'Large Button',
    variant: 'contained',
    color: 'primary-main',
    size: 'xl',
    weight: '700',
  },
};

export const Small = {
  args: {
    label: 'Small Button',
    variant: 'contained',
    color: 'primary-main',
    size: 'xs',
    weight: '500',
  },
};
