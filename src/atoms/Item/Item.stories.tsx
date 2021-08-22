import React from 'react';
import { Meta } from '@storybook/react';
import  CategoryItem from './Item';
import { StyledContainerGrid } from '../../utils/Utils'


export default {
  title: 'Example/Components/Item',
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

export const Category: React.VFC<{}> = () => <CategoryItem type="category" media="https://picsum.photos/id/17/1280/720" title="Pasta Corta" headline="gusto classico" />
export const Product: React.VFC<{}> = () => <CategoryItem type="product" media="https://picsum.photos/id/17/1280/720" title="Mezzi Rigatoni n* 26" headline="formato corto" />