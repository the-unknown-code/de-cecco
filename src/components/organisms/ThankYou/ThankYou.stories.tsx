import React from 'react';
import { Meta } from '@storybook/react';
import  ThankYou from './ThankYou';
import { StyledContainer } from '../../../utils/Utils'


export default {
  title: 'Components/Organisms/ThankYou ',
  component: ThankYou ,
  decorators: [
    (Story) => (
      <StyledContainer>
        <Story />
      </StyledContainer>
    )
  ]
} as Meta;

export const Default: React.VFC<{}> = () => <ThankYou title="Grazie" buttonLabel="Torna alla Homepage" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a mollis ex. Sed interdum eu sapien lobortis porta. Maecenas a lectus ut nisl venenatis gravida." />;

