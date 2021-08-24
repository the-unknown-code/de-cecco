import React from 'react';
import { Meta } from '@storybook/react';
import Headline from './Headline';
import { Tint } from './Headline.style'

export default {
  title: 'Components/Atoms/Headline',
  component: Headline,
  argTypes: {
    variant: {
      options: ['white', 'blue'],
      control: { type: 'select' },
      defaultValue: 'white'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Novità'
    }
  }
} as Meta;

export const Default: React.VFC<{ variant: Tint, label: string }> = ({ variant, label }) => <Headline label={label} tint={variant}></Headline>;
