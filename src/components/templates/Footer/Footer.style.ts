import styled from 'styled-components'
import { colors, fonts } from '../../../styles/theme'

export const FooterWrapper = styled.footer`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: auto;
    `

export const FooterNewsletterContainer = styled.div`
    position: relative;
    width: 100%;
    background-color: ${colors.cyan};
    color: ${colors.white};
    padding: 1.25rem;
    `

export const FooterTitle = styled.p`
    position: relative;
    color: ${colors.yellow};
    
    color: ${colors.yellow};
    font-family: ${fonts.kinney.family};
    font-size: 2.5rem;
    letter-spacing: 0.04em;
    line-height: 1.15;	
    `