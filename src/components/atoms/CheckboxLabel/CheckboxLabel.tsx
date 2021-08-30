import React, { useState } from "react";
import { StyledCheckboxLabel, StyledCheckboxLabelText, StyledCheckboxLabelInput } from "./CheckboxLabel.style";

interface CheckboxLabelProps {
    name?: string
    label: string,
    checked?: boolean
}

const CheckboxLabel: React.VFC<CheckboxLabelProps> = ({
    label,
    name = 'checkbox',
    checked = false,
    ...rest
}) => {

    const [ checkedValue, setChecked ] = useState(checked)

    const changeValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

    return (
        <StyledCheckboxLabel {...rest}>
            <StyledCheckboxLabelInput name={name} type="checkbox" checked={checkedValue} onChange={changeValue} />
            <StyledCheckboxLabelText>{ label }</StyledCheckboxLabelText>
        </StyledCheckboxLabel>
    )
}

export default CheckboxLabel