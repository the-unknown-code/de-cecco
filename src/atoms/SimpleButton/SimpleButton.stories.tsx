import React from 'react';
import { Meta } from '@storybook/react';
import  SimpleButton from './SimpleButton';
import { Tint } from './SimpleButton.style'

export default {
  title: 'Example/Atoms/SimpleButton',
  component: SimpleButton,
  argTypes: {
    variant: {
      options: ['white', 'cyan'],
      control: { type: 'select' },
      defaultValue: 'white'
    }
  }
} as Meta;

export const Primary: React.VFC<{variant:Tint}> = ({ variant }) => <SimpleButton tint={ variant } label="Vedi tutti i prodotti"></SimpleButton>;
