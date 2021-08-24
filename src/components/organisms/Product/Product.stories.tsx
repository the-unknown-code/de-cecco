import React from 'react';
import { Meta } from '@storybook/react';
import  Product from './Product';
import CoverMedia  from '../../atoms/CoverMedia/CoverMedia';
import { StyledContainer } from '../../../utils/Utils'


export default {
  title: 'Components/Organisms/Product',
  component: Product,
  decorators: [
    (Story) => (
      <StyledContainer>
        <CoverMedia media="https://picsum.photos/id/17/1280/720" />
        <div style={{ position: 'relative', width: '50%', maxWidth: '420px', height: '100%'}}>
            <Story />
        </div>
      </StyledContainer>
    )
  ],
  argTypes: {
    headline: {
      control: { type: 'text' },
      defaultValue: 'Novità'
    },
    title: {
      control: { type: 'text' },
      defaultValue: 'I grandi classici'
    },
    productLabel: {
      control: { type: 'text' },
      defaultValue: 'Pennette rigate n° 241'
    }   
  }
} as Meta;

export const Default: React.VFC<{headline:string, title:string, productLabel:string }> = ({headline, title, productLabel}) => <Product headline={headline} title={title} media="https://picsum.photos/id/22/640" mediaHover="https://picsum.photos/id/33/640" productLabel={productLabel} />
