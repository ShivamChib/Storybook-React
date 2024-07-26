// src/stories/Slider.stories.tsx

import React from 'react';
import { Story, Meta } from '@storybook/react';
import Slider from '../components/Slider';

export default {
  title: 'Components/Slider',
  component: Slider,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['continuous', 'discreet'],
      },
    },
    subtype: {
      control: {
        type: 'select',
        options: ['single', 'range'],
      },
    },
    steps: {
      control: { type: 'number', min: 1, max: 10 },
    },
    handleSize: {
      control: {
        type: 'select',
        options: ['Size_24', 'Size_32'],
      },
    },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: Story<any> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'continuous',
  subtype: 'single',
  handleSize: 'Size_24',
  onChange: (value) => console.log(value),
};

export const Discreet = Template.bind({});
Discreet.args = {
  type: 'discreet',
  subtype: 'single',
  steps: 5,
  handleSize: 'Size_32',
  onChange: (value) => console.log(value),
};
