import React from 'react';
import { StyledCarouselSlide, StyledCarouselSlideBackground, StyledCarouselSlideWrapper, StyledCarouselSlideTitle, StyledCarouselSlideHeadline } from './CarouselSlide.style'
import SimpleButton from '../SimpleButton/SimpleButton'

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
            <StyledCarouselSlideBackground src={ media } alt={ mediaAlt } />
            <StyledCarouselSlideWrapper>
                { headline && <StyledCarouselSlideHeadline>{ headline }</StyledCarouselSlideHeadline> }
                { title && <StyledCarouselSlideTitle>{ title }</StyledCarouselSlideTitle>  }
                { buttonLabel && <SimpleButton label={ buttonLabel }></SimpleButton> }
            </StyledCarouselSlideWrapper>
        </StyledCarouselSlide>
    )
}
export default CarouselSlide