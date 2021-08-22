import styled from 'styled-components'
import { colors, fonts, breakpoints } from '../../styles/theme';

export const StyledCategoryItem = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    `

    
export const StyledCategoryItemBackground = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    `