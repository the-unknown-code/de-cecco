import React from 'react';
import { Meta } from '@storybook/react';
import  CategoryItem from './CategoryItem';
import { StyledContainerGrid } from '../../utils/Utils'


export default {
  title: 'Example/CategoryItem',
  component: CategoryItem,
  decorators: [
    (Story) => (
      <StyledContainerGrid>
        <Story />
        <Story />
        <Story />
      </StyledContainerGrid>
    )
  ]
} as Meta;

export const Default: React.VFC<{}> = () => <CategoryItem media="https://picsum.photos/id/17/1280/720" />