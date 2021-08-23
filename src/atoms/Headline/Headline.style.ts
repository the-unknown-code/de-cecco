import styled from 'styled-components'
import { colors, fonts } from '../../styles/theme'

export const TINTS = {
	white: 'white',
	blue: 'blue',
};

const tintKeys = Object.keys(TINTS) as Array<keyof typeof TINTS>;
export type Tint = typeof tintKeys[number];


interface StyleHeadlineProps {
    tint: Tint
}

const getHeadlineVariant = (tint: Tint) => {
    
    if(tint === TINTS.white) {
        return `
            --headline-color: ${colors.white};
            --headline-bar: ${colors.yellowDark};
        `
    }
    
    return `
        --headline-color: ${colors.blue};
        --headline-bar: ${colors.yellowDark};
    `
}

export const StyleHeadline = styled.span<StyleHeadlineProps>`

    ${({ tint }) => getHeadlineVariant(tint)};

    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-top: .75rem;

    color: var(--headline-color);
    font-family: ${fonts.pathway.family};
    font-weight: ${fonts.pathway.weights.normal};
    font-size: .75rem;
    letter-spacing: 0.04em;
    line-height: 1;	
    text-transform: uppercase;
    white-space: nowrap;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        width: 20px;
        height: 0;
        border-top: 2px solid var(--headline-bar);
    }
    `