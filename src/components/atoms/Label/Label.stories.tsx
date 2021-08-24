import React from 'react';
import { Meta } from '@storybook/react';
import Label from './Label';
import { Tint } from './Label.style'

export default {
  title: 'Components/Atoms/Label',
  component: Label,
  argTypes: {
    variant: {
      options: ['gray', 'cyan', 'yellow'],
      control: { type: 'select' },
      defaultValue: 'gray'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Promozione'
    }
  }
} as Meta;

export const Default: React.VFC<{ variant: Tint, label: string }> = ({ variant, label }) => <Label label={label} tint={variant}></Label>;
