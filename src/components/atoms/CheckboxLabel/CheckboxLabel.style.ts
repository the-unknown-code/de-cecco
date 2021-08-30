import styled from "styled-components";
import { colors, fonts } from "../../../styles/theme";


export const StyledCheckboxLabel = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    `

export const StyledCheckboxLabelInput = styled.input.attrs({ type: 'checkbox'})`
    position: relative;
    appearance: none;
    outline: none !important;
    width: .85rem;
    height: .85rem;
    flex: 0 0 .85rem;
    border-radius: 3px;
    border: 1px solid ${colors.white};
    cursor: pointer;

    :checked {
        background-color: ${colors.white};
    }
    `

export const StyledCheckboxLabelText = styled.div`
    position: relative;
    margin: 0;

    font-family: ${fonts.bliss.family};
    font-weight: ${fonts.bliss.weights.normal};
    font-size: .85rem;
    padding-left: .35rem;
    `
