import React from 'react';
import { Meta } from '@storybook/react';
import  Product from './Product';
import CoverMedia  from '../atoms/CoverMedia/CoverMedia';
import { StyledContainer } from '../../utils/Utils'


export default {
  title: 'Example/Components/Product',
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
  ]
} as Meta;

export const Default: React.VFC<{}> = () => <Product headline="Novità" title="I grandi classici" media="https://picsum.photos/id/22/640" mediaHover="https://picsum.photos/id/33/640" productLabel="Pennette rigate n° 241" />
