import styled from "styled-components";
import { colors, fonts } from "../../../styles/theme";

export const StyledBannerWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    `

export const StyledBannerContentWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    padding: 1.75rem;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 80%;
        left: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.75) 100%);
    }
    `

export const StyledBannerTitle = styled.p`
    position: relative;
    width: 100%;
    text-align: center;
    margin: 1.75rem 0;

    color: ${colors.white};
    font-family: ${fonts.kinney.family};
    font-size: 2.25rem;
    line-height: 1;	
    `
