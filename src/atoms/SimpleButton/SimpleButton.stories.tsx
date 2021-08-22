import React from 'react';
import { Meta } from '@storybook/react';

import  SimpleButton from './SimpleButton';

export default {
  title: 'Example/Atoms/SimpleButton',
  component: SimpleButton
} as Meta;

export const Primary: React.VFC<{}> = () => <SimpleButton label="Vedi tutti i prodotti"></SimpleButton>;
