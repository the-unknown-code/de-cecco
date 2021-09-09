import styled from 'styled-components'
import { colors, fonts } from '../../../styles/theme'

export const StyledIconsWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    padding: 1.75rem;
    box-sizing: border-box;
    
    .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit:cover;
        object-position: center;
    }

    section:not(:last-child) {
       &::before {
           content: '';
           position: absolute;
           width: calc(100% - 40px);
           max-width: 640px;
           left: 50%;
           transform: translateX(-50%);
           bottom: 0;
           height: 1px;
           background-color: ${colors.grayLight};
       }
    }

    .swiper-container {
        overflow: inherit;
    }
    `

export const StyledIconsWrapperTooltipHolder = styled.section`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    `

export const StyledIconsWrapperTooltipGrid = styled.section`
    position: relative;
    width: 100%;
    display: grid;
    gap: 10px;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    align-items: center;
    margin: auto;
    padding: 2rem 0;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
    }
    `

export const StyledIconsWrapperTitle = styled.p`
    position: relative;
    width: 100%;
    color: ${colors.blue};
    font-family: ${fonts.kinney.family};
    font-weight: ${fonts.kinney.weights.normal};
    font-size: 2rem;
    text-align: center;
    margin: 0;

    @media screen and (min-width: 768px) {
        font-size: 3rem;
    }
    `

export const StyledIconsWrapperSubtitle = styled.p`
    position: relative;
    width: 100%;
    color: ${colors.blue};
    font-family: ${fonts.bliss.family};
    font-weight: ${fonts.bliss.weights.normal};
    font-style: italic;
    font-size: 1rem;
    text-align: center;
    margin: 1.35rem 0;

    @media screen and (min-width: 768px) {
        font-size: 1.35rem;
        margin: 2rem 0;
    }
    `