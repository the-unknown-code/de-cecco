import styled from 'styled-components'
import { colors, fonts } from '../../../styles/theme';

export const TINTS = {
	white: 'white',
	cyan: 'cyan',
};

const tintKeys = Object.keys(TINTS) as Array<keyof typeof TINTS>;
export type Tint = typeof tintKeys[number];


export const themes = {
    [TINTS.white]: {
        background: colors.white,
        hoverBackground: colors.cyan,
        color: colors.cyan,
        hoverColor: colors.white,
        border: 'none',
        borderRadius: '999px'
    },
    [TINTS.cyan]: {
        background: colors.cyan,
        hoverBackground: colors.white,
        color: colors.white,
        hoverColor: colors.cyan,
        border: 'none',
        borderRadius: '999px'
    }
}


export const StyledSimpleButton = styled.button`

    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    appearance: none;
    padding: 0.75rem 1.5rem;

    font-family: ${fonts.pathway.family};
    font-weight: ${fonts.pathway.weights.normal};
    font-size: .85rem;
    letter-spacing: 0.04em;
    line-height: 1.25;	
    text-transform: uppercase;
    white-space: nowrap;

    background-color: ${({ theme }) => (theme.background)};
    color: ${({ theme }) => theme.color};
    border: ${({ theme }) => theme.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    outline: none;

    transition: all .25s 0s ease-out;
    cursor: pointer;

    @media (hover: hover) {
		&:hover {
			background-color: ${({ theme }) => theme.hoverBackground};
            color:  ${({ theme }) => theme.hoverColor};
		}
	}
    `
