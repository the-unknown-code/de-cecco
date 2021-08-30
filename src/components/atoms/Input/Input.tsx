import React, { useState }  from "react";
import { StyledInput, Tint } from './Input.style'

interface InputProps {
    placeholder: string,
    tint: Tint
}

const Input: React.VFC<InputProps> = ({ 
    placeholder,
    tint = 'white',
    ...rest
}) => {

    const [value, setValue] = useState(placeholder);

    const changeValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <StyledInput tint={tint} placeholder={value} onChange={changeValue} {...rest} ></StyledInput>
    )
}

export default Input;