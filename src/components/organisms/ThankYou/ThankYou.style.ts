import styled from "styled-components";
import { colors, fonts } from "../../../styles/theme";

export const StyledThankYouWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${colors.white};
    `

export const StyledThankYouContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 1.75rem;
    `

export const StyledThankYouTitle = styled.p`
    position: relative;
    width: 100%;
    text-align: center;
    margin: 1rem 0;

    color: ${colors.yellow};
    font-family: ${fonts.kinney.family};
    font-size: 3.35rem;
    line-height: 1;	
    `

export const StyledThankYouDescription = styled.p`
    position: relative;
    width: 100%;
    text-align: center;
    margin: 1rem 0 2rem 0;
    max-width: 480px;

    color: ${colors.blue};
    font-family: ${fonts.bliss.family};
    font-size: 1em;
    line-height: 1.2;	
    `
