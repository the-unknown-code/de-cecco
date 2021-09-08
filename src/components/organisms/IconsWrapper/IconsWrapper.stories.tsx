import React from 'react';
import { Meta } from '@storybook/react';
import  IconsWrapper from './IconsWrapper';


export default {
  title: 'Components/Organisms/IconsWrapper',
  component: IconsWrapper,
} as Meta;

export const Default: React.VFC<{}> = () => <IconsWrapper title="#AllaDeCecco" subtitle="Lenta Essicazione" />