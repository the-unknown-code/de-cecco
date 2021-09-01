import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const StyledSocialIcon = styled.a`
    position: relative;
    display: inline-flex;
    width: 4rem;
    height: 4rem;
    border: 1px solid ${colors.gray};
    border-radius: 50%;
    box-sizing: border-box;
    margin: 0 .5rem;
    overflow: hidden;
    transition: all .5s 0s ease-out;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        padding: 1rem;
        box-sizing: border-box;
    }

    &:hover {
        border-color: transparent;
        background-color: ${colors.white};
    }
    `