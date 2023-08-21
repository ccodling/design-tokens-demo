import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../src/components/Button';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    rootClass: 'ml-1',
    color: 'primary',
    disabled: false,
    size: 'medium',
    variant: 'contained',
    children: 'Button',
  },
};