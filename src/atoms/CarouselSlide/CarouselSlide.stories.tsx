import React from 'react';
import { Meta } from '@storybook/react';
import  CarouselSlide from './CarouselSlide';
import { StyledContainer } from '../../utils/Utils'


export default {
  title: 'Example/CarouselSlide',
  component: CarouselSlide,
  decorators: [
    (Story) => (
      <StyledContainer>
        <Story />
      </StyledContainer>
    )
  ]
} as Meta;

export const Slide: React.VFC<{}> = () => <CarouselSlide carousel media="https://picsum.photos/id/17/1280/720" headline="Novità" title="Le specilità dell'estate" buttonLabel="Vedi tutti i prodotti" />;
export const Homepage: React.VFC<{}> = () => <CarouselSlide media="https://picsum.photos/id/17/1280/720"  buttonLabel="Scopri il prodotto" />;
