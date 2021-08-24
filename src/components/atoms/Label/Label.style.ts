import styled from 'styled-components'

import { colors, fonts } from '../../../styles/theme'

export const TINTS = {
	gray: 'gray',
	cyan: 'cyan',
    yellow: 'yellow'
};


const tintKeys = Object.keys(TINTS) as Array<keyof typeof TINTS>;
export type Tint = typeof tintKeys[number];


interface StyleLabelProps {
    tint: Tint
}


const getLabelVariant = (tint: Tint) => {
    
    if(tint === TINTS.gray) {
        return `
            --label-background: ${colors.gray};
            --label-color: ${colors.white};
        `
    }
    
    else if(tint === TINTS.yellow) {
        return `
            --label-background: ${colors.yellow};
            --label-color: ${colors.blue};
        `
    }

    return `
        --label-background: ${colors.cyan};
        --label-color: ${colors.white};
    `
}

export const StyledLabel = styled.span<StyleLabelProps>`

    ${({ tint }) => getLabelVariant(tint)}; 

    position: relative;
    display: inline-flex;
    width: min-content;
    margin: 0 .15rem;
    padding: .3rem .5rem;
    border-radius: 3px;
    color: var(--label-color);
    background-color: var(--label-background);
    justify-content: center;
   
    font-family: ${fonts.pathway.family};
    font-weight: ${fonts.pathway.weights.bold};
    font-size: .75rem;
    letter-spacing: 0.04em;
    line-height: 1;	
    text-transform: uppercase;
    white-space: nowrap;
    `