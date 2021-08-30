import styled from "styled-components";
import { colors, fonts } from "../../../styles/theme";

export const TINTS = {
	white: 'white',
	cyan: 'cyan',
};

const typeKeys = Object.keys(TINTS) as Array<keyof typeof TINTS>;
export type Tint = typeof typeKeys[number];

interface StyledIconProps {
    tint: Tint
}


const getIconVariant = (tint: Tint) => {
    if(tint === TINTS.cyan) {
        return `
        --icon-primary: ${colors.white};
        --icon-background: ${colors.cyanDark};
        `
    }

    return `
    --icon-primary: ${colors.cyanDark};
    --icon-background: ${colors.white};
    `
}

export const StyledIconWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 .5rem;
    `

export const StyledIconLabel = styled.p<StyledIconProps>`

    ${({ tint }) => getIconVariant(tint)};

    position: relative;
    margin: 0;

    padding-top: 1rem;
    max-width: 120px;
    text-align: center;
    
    color: var(--icon-primary);
    font-family: ${fonts.bliss.family};
    font-weight: ${fonts.bliss.weights.bold};
    font-size: .85rem;
    `

export const StyledIcon = styled.div<StyledIconProps>`

    ${({ tint }) => getIconVariant(tint)};

    position: relative;
    width: 4rem;
    height: 4rem; 
    flex: 0 0 4rem;
    border-radius: 50%;
    background-color: var(--icon-background);
    display: flex;
    box-sizing: border-box;
    overflow: hidden;

    img {
        position: relative;
        widtH: 100%;
        height: 100%;
        padding: .8rem;
        box-sizing: border-box;
    }
    `

