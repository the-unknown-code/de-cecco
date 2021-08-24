import React from "react";
import { StyledLabel, Tint } from './Label.style'

interface LabelProps {
    label: string,
    tint: Tint
}

const Label:React.VFC<LabelProps> = ({
    label,
    tint
}) => {
    return (
        <StyledLabel tint={ tint }>{ label }</StyledLabel>
    )
}

export default Label;