import styled from 'styled-components'
import { colors, fonts } from '../../../styles/theme'

export const StyledProductWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    font-size: 1.85rem;
    line-height: 1.15;	
    `

export const StyledProductMediaWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin: 2rem auto;
    display: flex;
    justify-content: center;

    img {
        position: absolute;
        height: 100%;
        width: auto;
        object-fit: contain;
    }
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
