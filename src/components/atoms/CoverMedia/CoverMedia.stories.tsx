import React from 'react';
import { Meta } from '@storybook/react';
import  CoverMedia from './CoverMedia';
import { StyledContainer } from '../../../utils/Utils'


export default {
  title: 'Components/Atoms/CoverMedia',
  component: CoverMedia,
  decorators: [
    (Story) => (
      <StyledContainer>
        <Story />
      </StyledContainer>
    )
  ]
} as Meta;

export const Default: React.VFC<{}> = () => <CoverMedia  media="https://picsum.photos/id/17/1280/720" />;
