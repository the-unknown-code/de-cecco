import React from 'react';
import { Meta } from '@storybook/react';
import Input from './Input';
import { Tint } from './Input.style'

export default {
  title: 'Components/Atoms/Input',
  component: Input,
  argTypes: {
    tint: {
      options: ['white', 'blue'],
      control: { type: 'select' },
      defaultValue: 'white'
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: 'Il tuo indirizzo email'
    }
  }
} as Meta;

export const Default: React.VFC<{ tint: Tint, placeholder: string }> = ({ tint, placeholder }) => <Input placeholder={placeholder} tint={tint} />
