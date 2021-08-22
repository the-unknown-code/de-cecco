import React from 'react';
import { Meta } from '@storybook/react';
import  CarouselSlide from './CarouselSlide';


export default {
  title: 'Example/CarouselSlide',
  component: CarouselSlide
} as Meta;

export const SlideItem: React.VFC<{}> = () => <CarouselSlide carousel media="https://picsum.photos/id/17/1280/720" headline="Novità" title="Le specilità dell'estate" buttonLabel="Vedi tutti i prodotti" />;

export const HomepageItem: React.VFC<{}> = () => <CarouselSlide media="https://picsum.photos/id/17/1280/720"  buttonLabel="Scopri il prodotto" />;
