import styled from 'styled-components'
import { colors, fonts, breakpoints } from '../../../styles/theme';

export interface StyledCarouselSlideProps {
    carousel: boolean
}

const getSlideVariant = (carousel: boolean) => {
    if(carousel) {
        return `
            --border-radius-mobile: 0;
            --border-radius: 0 0 .5rem .5rem;
        `
    }
    
    return `
        --border-radius-mobile: .5rem;
        --border-radius: .5rem;
    `
}

export const StyledCarouselSlide = styled.div<StyledCarouselSlideProps>`
    ${({ carousel }) => getSlideVariant(carousel)};
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
    border-radius: var(--border-radius-mobile);

    @media screen and (min-width: ${breakpoints.md}px) {
        border-radius: var(--border-radius);
    }
    `

export const StyledCarouselSlideWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    padding: 0 1.5rem 3.5rem 1.5rem;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 80%;
        left: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.75) 100%);
    }
    `

export const StyledCarouselSlideTitle = styled.p`
    position: relative;
    width: 100%;
    text-align: center;
    max-width: 320px;
    margin: 1.25rem 0;

    color: ${colors.yellowDark};
    font-family: ${fonts.kinney.family};
    font-size: 2.5rem;
    letter-spacing: 0.04em;
    line-height: 1.15;	
    `
