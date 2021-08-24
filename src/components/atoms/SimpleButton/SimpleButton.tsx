import React, { PropsWithChildren } from 'react';
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
        <StyledSimpleButton theme={themes[tint]} onClick={ onClick } {...rest} >{ label }</StyledSimpleButton>
    )
}
export default SimpleButton