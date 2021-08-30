import React from 'react';
import { Meta } from '@storybook/react';
import Icon from './Icon';
import { Tint } from './Icon.style'

export default {
  title: 'Components/Atoms/Icon',
  component: Icon,
  argTypes: {
    tint: {
      options: ['white', 'cyan'],
      control: { type: 'select' },
      defaultValue: 'white'
    },
  }
} as Meta;

export const Default: React.VFC<{ tint: Tint }> = ({ tint }) => <Icon tint={tint} icon="https://picsum.photos/120" label="Tempi di consegna e spedizione" />
