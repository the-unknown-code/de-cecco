import React from 'react';
import { Meta } from '@storybook/react';
import  SocialIcon from './SocialIcon';
import { StyledContainer } from '../../../utils/Utils'


export default {
  title: 'Components/Atoms/SocialIcon',
  component: SocialIcon,
  decorators: [
    (Story) => (
      <StyledContainer>
        <Story />
      </StyledContainer>
    )
  ]
} as Meta;

export const Default: React.VFC<{}> = () => <SocialIcon icon="https://picsum.photos/id/17/1280/720" href="https://www.google.it" />
