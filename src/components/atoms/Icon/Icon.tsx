import React from "react";
import { StyledIcon, StyledIconWrapper, StyledIconLabel, Tint } from './Icon.style'

interface Icon {
    label: string,
    icon: string,
    tint?: Tint
}

const Icon:React.VFC<Icon> = ({
    label,
    icon,
    tint = "white",
    ...rest
}) => {
    return (
        <StyledIconWrapper {...rest}>
            <StyledIcon tint={tint}>
                <img src={icon} alt={label} />
            </StyledIcon>
            <StyledIconLabel tint={tint}>{ label }</StyledIconLabel>
        </StyledIconWrapper>
    )
}

export default Icon;