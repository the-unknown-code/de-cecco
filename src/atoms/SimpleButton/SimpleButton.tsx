import React, { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';
import { StyledSimpleButton, themes, Tint, TINTS } from './SimpleButton.style'


interface SimpleButtonProps extends PropsWithChildren<any> {
    onClick?: () => void,
    tint?: Tint,
    label: string
}


const SimpleButton: React.VFC<SimpleButtonProps> = ({
    onClick,
    children,
    label,
    tint = TINTS.white,
    ...rest
}) => {
    return(
        <ThemeProvider theme={themes[tint]}>
            <StyledSimpleButton onClick={ onClick } {...rest} >{ label }</StyledSimpleButton>
        </ThemeProvider>
        
    )
}
export default SimpleButton