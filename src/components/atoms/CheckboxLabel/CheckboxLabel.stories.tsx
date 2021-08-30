import React from 'react';
import { Meta } from '@storybook/react';
import CheckboxLabel from './CheckboxLabel';

export default {
  title: 'Components/Atoms/CheckboxLabel',
  component: CheckboxLabel
} as Meta;

export const Default: React.VFC<{}> = () => <CheckboxLabel label="Ho letto e accetto l’informativa sulla Privacy" />
