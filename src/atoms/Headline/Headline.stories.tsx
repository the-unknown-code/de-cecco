import React from 'react';
import { Meta } from '@storybook/react';

import  Headline from './Headline';

export default {
  title: 'Example/Atoms/Headline',
  component: Headline,
  argTypes: {
    variant: {
      options: ['white', 'blue'],
      control: { type: 'select' },
      defaultValue: 'white'
    }
  }
} as Meta;

export const Primary: React.VFC<{}> = ({ variant }) => <Headline label="Novità" tint={ variant }></Headline>;
