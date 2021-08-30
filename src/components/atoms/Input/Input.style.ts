import styled from "styled-components";
import { colors, fonts } from "../../../styles/theme";

export const TINTS = {
	white: 'white',
	cyan: 'cyan',
};

const typeKeys = Object.keys(TINTS) as Array<keyof typeof TINTS>;
export type Tint = typeof typeKeys[number];

interface StyledInputProps {
    tint: Tint
}


const getInputVariant = (tint: Tint) => {
    if(tint === TINTS.cyan) {
        return `
        --input-primary: ${colors.white};
        --input-background: ${colors.cyan};
        `
    }

    return `
    --input-primary: ${colors.cyan};
    --input-background: ${colors.white};
    `
}


export const StyledInput = styled.input<StyledInputProps>`

    ${({ tint }) => getInputVariant(tint)};
    
    position: relative;
    width: 100%;
    color: var(--input-primary);
    background-color: var(--input-background);
    border-color: var(--input-primary);
    border-width: 1px;
    border-style: solid;
    border-radius: 999px;
    padding: 1rem 1.25rem;
    appearance:none;
    outline: none !important;
    box-sizing: border-box;
    font-family: ${fonts.bliss.family};
    font-weight: ${fonts.bliss.weights.normal};
    font-size: .85rem;
    

    ::placeholder {
        color: var(--input-primary);
    }
    `
