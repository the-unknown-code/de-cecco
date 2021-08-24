import styled from 'styled-components'
import { colors, fonts } from '../../styles/theme'

export const StyledProductWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: justify-start;
    items-align: center;
    background-color: white;
    padding: 2.25rem 1.25rem;
    box-sizing: border-box;
    `

export const StyledProductTitle = styled.p`
    position: relative;
    width: 100%;
    text-align: center;
    margin: 1.25rem 0;

    color: ${colors.yellow};
    font-family: ${fonts.kinney.family};
    font-size: 1.75rem;
    line-height: 1.15;	
    `

export const StyledProductMediaWrapper = styled.div`
    position: relative;
    width: 100%;
    heigth: 0;
    padding-bottom: 50%;
    background-color: red;
    margin-top: auto;
    `

export const StyleProductLabel = styled.p`
    position: relative;
    width: 100%;
    text-align: center;
    
    color: ${colors.cyan};
    font-size: .85rem;
    font-family: ${fonts.kinney.family};
    line-height: 1.15;	
    margin-top: auto;
    `
