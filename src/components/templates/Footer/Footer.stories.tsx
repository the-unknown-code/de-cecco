import React from 'react';
import { Meta } from '@storybook/react';
import  Footer from './Footer';
import { StyledContainer } from '../../../utils/Utils'


export default {
  title: 'Components/Templates/Footer',
  component: Footer
} as Meta;

export const Default: React.VFC<{}> = () => <Footer newsletterTitle="Newsletter"  newsletterDescription="Suspendisse potenti. Nunc sed egestas lorem. Phasellus orci libero, rutrum sed congue id, porta sit amet diam." linksTitle="Links utili" linksArray={[
  { label: 'Sito istituzionale', href: 'https://www.google.it'},{ label: 'Condizioni di vendita e utilizzo', href: 'https://www.google.it'},{ label: 'Diritto di recesso', href: 'https://www.google.it'},
  { label: 'Provacy and cookie policy', href: 'https://www.google.it'},{ label: 'Tempi/motodo di spedizione', href: 'https://www.google.it'},{ label: 'FAQ', href: 'https://www.google.it'},{ label: 'Servizio clienti', href: 'https://www.google.it'}
]} followUsTitle="Seguici" />
