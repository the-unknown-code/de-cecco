import React from 'react';
import Headline from '../../atoms/Headline/Headline'
import SimpleButton from '../../atoms/SimpleButton/SimpleButton'
import CoverMedia from '../../atoms/CoverMedia/CoverMedia'
import { StyledCarouselSlide, StyledCarouselSlideWrapper, StyledCarouselSlideTitle } from './CarouselSlide.style'

interface CarouselSlideProps  {
    title?: string,
    headline?: string,
    media: string,
    mediaAlt?: string,
    buttonLabel?: string,
    carousel?: boolean
}


const CarouselSlide: React.VFC<CarouselSlideProps> = ({
    title,
    headline,
    media,
    mediaAlt,
    buttonLabel,
    carousel = false,
    ...rest
}) => {
    return(
        <StyledCarouselSlide carousel={ carousel } {...rest}>
            <CoverMedia media={ media } mediaAlt={ mediaAlt } />
            <StyledCarouselSlideWrapper>
                { headline && <Headline label={ headline } tint="white" /> }
                { title && <StyledCarouselSlideTitle>{ title }</StyledCarouselSlideTitle>  }
                { buttonLabel && <SimpleButton label={ buttonLabel }></SimpleButton> }
            </StyledCarouselSlideWrapper>
        </StyledCarouselSlide>
    )
}
export default CarouselSlide