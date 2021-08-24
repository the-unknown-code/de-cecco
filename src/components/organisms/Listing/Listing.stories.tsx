import React from 'react';
import { Meta } from '@storybook/react';
import  Listing from './Listing';
import { StyledContainer } from '../../../utils/Utils'


export default {
  title: 'Components/Organisms/Listing',
  component: Listing,
  decorators: [
    (Story) => (
      <StyledContainer>
        <Story />
      </StyledContainer>
    )
  ]
} as Meta;

export const Default: React.VFC<{}> = () => <Listing media="https://picsum.photos/id/17/1280/720" title="Penne lisce piccole n°240" labels={[{label: '500g', tint: 'gray'}, {label: 'novità', tint: 'yellow'}, {label: '-15%', tint: 'cyan'}]} price="0,99€" discount="1,49€" />