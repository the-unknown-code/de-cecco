import React from 'react';
import { Meta } from '@storybook/react';
import  Footer from './Footer';
import { StyledContainer } from '../../../utils/Utils'


export default {
  title: 'Components/Templates/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <StyledContainer>
          <Story />
      </StyledContainer>
    )
  ]
} as Meta;

export const Default: React.VFC<{}> = () => <Footer newsletterTitle="Newsletter" newsletterDescription="Suspendisse potenti. Nunc sed egestas lorem. Phasellus orci libero, rutrum sed congue id, porta sit amet diam." />
