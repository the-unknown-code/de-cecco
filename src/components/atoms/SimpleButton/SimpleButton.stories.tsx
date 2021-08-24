import React from 'react';
import { Meta } from '@storybook/react';
import SimpleButton from './SimpleButton';
import { Tint } from './SimpleButton.style'

export default {
  title: 'Example/Atoms/SimpleButton',
  component: SimpleButton,
  argTypes: {
    variant: {
      options: ['white', 'cyan'],
      control: { type: 'select' },
      defaultValue: 'white'
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Vedi tutti i prodotti'
    }
  }
} as Meta;

export const Default: React.VFC<{ variant: Tint, label: string }> = ({ variant, label }) => <SimpleButton tint={variant} label={label}></SimpleButton>;
