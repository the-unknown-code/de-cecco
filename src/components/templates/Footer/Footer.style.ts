import styled from 'styled-components'
import { colors, fonts } from '../../../styles/theme'

export const FooterWrapper = styled.footer`
    position: relative;
    width: 100%;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 45% 55%;
        grid-template-rows: auto;
    }

    `

export const FooterNewsletterContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: ${colors.cyan};
    color: ${colors.white};
    padding: 1.75rem;
    box-sizing: border-box;
    `

export const FooterTitle = styled.p`
    position: relative;
    color: ${colors.yellow};
    
    font-family: ${fonts.kinney.family};
    font-size: 2.25rem;
    letter-spacing: 0.04em;
    line-height: 1.15;	
    margin-top: 0;
    margin-bottom: .6rem;
    `

export const FooterDescription = styled.p`
    position: relative;

    color: ${colors.white};
    font-family: ${fonts.bliss.family};
    font-weight: ${fonts.bliss.weights.normal};
    font-size: 1rem;
    margin: 0;
    `

export const FooterInputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin: 1rem 0;
    
    input {
        flex-grow: 1;
    }

    button {
        margin: .5rem 0;
        width: 100%;
    }

    @media screen and (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 8px;

        
        button {
            margin: 0;
            width: auto;
        }
    }
    `

export const FooterIconsContainerMobile = styled.div`
    position: relative;
    width: 100%;
    padding: 2rem 0;

    @media screen and (min-width: 768px) {
        display: none;
    }
    `


export const FooterIconsContainer = styled.ul`
    position: relative;
    width: 100%;
    
    justify-content: center;
    align-items: center;
    background-color: ${colors.grayLight};
    padding: 1.75rem;
    box-sizing: border-box; 
    display: none;

    li {
        position: relative;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 768px) {

        display: flex;
        li:not(:last-child):before {
            content: '';
            position: absolute;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: ${colors.cyan};
            left: 100%;
            top: 2rem;
        }
    }
    
    `