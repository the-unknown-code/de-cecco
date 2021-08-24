import styled from 'styled-components'
import { colors, fonts } from '../../../styles/theme'

export const StyledListing = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: white;
    padding: 1.25rem;
    box-sizing: border-box;
    `

export const StyledListingImage = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 2rem;

    img {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    `

export const StyledListingWrapper= styled.div`
    position: relative;
    width: 100%;
    height: auto;
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 2rem 0;
    `

export const StyledListingTitle = styled.p`
    position: relative;
    width: 100%;
    text-align: center;
    
    color: ${colors.cyan};
    font-size: 1rem;
    font-family: ${fonts.kinney.family};
    font-weigth: ${fonts.kinney.weights.bold};
    line-height: 1.15;	
    padding: 1rem 0;
    `

export const StyledListingPrice = styled.p`
    position: relative;
    width: auto;
    margin: 0 .5rem;
    display: inline-flex;

    color: ${colors.blue};
    font-size: 1.5rem;
    font-family: ${fonts.pathway.family};
    `

export const StyledListingDiscount = styled.p`
    position: relative;
    width: auto;
    margin: 0 .5rem;
    display: inline-flex;

    color: ${colors.gray};
    text-decoration: line-through;
    font-size: 1rem;
    font-family: ${fonts.pathway.family};
    `