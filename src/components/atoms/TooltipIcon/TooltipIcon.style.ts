import styled from 'styled-components'
import {colors, fonts } from '../../../styles/theme'

export const SIZES = {
	small: 'small',
	default: 'default',
};

const typeKeys = Object.keys(SIZES) as Array<keyof typeof SIZES>;
export type Size = typeof typeKeys[number];

interface StyledTooltipIconProps {
    size: Size,
    dropShadow: boolean
}


const getTooltipVariant = (size: Size) => {
    if(size === SIZES.small) {
        return `
        --tooltip-size: 1.8rem;
        `
    }

    return `
    --tooltip-size: 3.2rem;
    `
}


const getTooltipVariantShadow = (dropShadow: boolean) => {
    if(dropShadow) {
        return `
        --tooltip-shadow: 0px 0px 4px 1px rgba(0,0,0,0.24);
        `
    }

    return `
    --tooltip-shadow: inherit;
    `
}

export const StyledTooltipIconWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: .25rem 1.5rem;
    `

export const StyledTooltipIcon = styled.div<StyledTooltipIconProps>`

    ${({ size }) => getTooltipVariant(size)};
    ${({ dropShadow }) => getTooltipVariantShadow(dropShadow)};

    position: relative;
    width: var(--tooltip-size);
    height: var(--tooltip-size);
    border-radius: 50%;
    overflow: hidden;
    box-shadow: var(--tooltip-shadow);

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
    `

export const StyledTooltipIconTitle = styled.p`

    position: relative;
    padding: .75rem 0;
    margin: 0;
    color: ${colors.blue};
    
    text-align: center;
    font-weight: ${fonts.bliss.weights.normal};
    line-height: 1;

    &[data-type="default"] {
        font-size: .85rem;
        font-family: ${fonts.bliss.family};
    }

    &[data-type="small"] {
        font-size: .75rem;
        text-transform: uppercase;
        font-family: ${fonts.pathway.family};
    }
    `

export const StyledTooltipIconCTA = styled.div`
    position: relative;
    width: .75rem;
    height: .75rem;
    border-radius: 50%;
    border: 1px solid ${colors.blue};
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    font-family: ${fonts.pathway.family};
    font-weight: ${fonts.pathway.weights.normal};
    font-size: .5rem;
    z-index: 2;

    &::before {
        content: 'i';
        position: absolute;
    }
    `

export const StyledTooltipIconHolder = styled.p`
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%) translateY(-1.1rem);
    width: 100%;
    height: auto;
    min-width: 140px;
    max-width: 180px;
    border-radius: 10px;
    text-align: center;
    font-family: ${fonts.bliss.family};
    font-weight: ${fonts.bliss.weights.normal};
    font-size: .75rem;
    background-color: ${colors.white};
    box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.05);
    color: ${colors.blue};

    span {
        width: 100%;
        display: block;
        box-sizing: border-box;
        position: relative;
        padding: 1rem;
    }

    &::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: white;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }
    `