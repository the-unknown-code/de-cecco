import React from 'react';
import { Meta } from '@storybook/react';
import  Banner from './Banner';
import { StyledContainer } from '../../../utils/Utils'


export default {
  title: 'Components/Organisms/Banner',
  component: Banner,
  decorators: [
    (Story) => (
      <StyledContainer>
        <Story />
      </StyledContainer>
    )
  ]
} as Meta;

export const Slide: React.VFC<{}> = () => <Banner label="promozione" title="Integralmente dal nostro mulino" buttonLabel="scopri la promozione" media="https://picsum.photos/id/17/1280/720" />;
