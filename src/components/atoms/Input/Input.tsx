import React, { useState }  from "react";
import { StyledInput, Tint } from './Input.style'

interface InputProps {
    placeholder: string,
    tint: Tint
    type?: string
}

const Input: React.VFC<InputProps> = ({ 
    placeholder,
    tint = 'white',
    type = 'text',
    ...rest
}) => {

    const [value, setValue] = useState(placeholder);

    const changeValue = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <StyledInput type={type} tint={tint} placeholder={value} onChange={changeValue} {...rest} ></StyledInput>
    )
}

export default Input;