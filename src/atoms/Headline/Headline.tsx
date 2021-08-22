import React from 'react';
import { StyleHeadline, Tint } from './Headline.style'

interface HeadlineProps {
    label: string,
    tint: Tint
}

const Headline: React.VFC<HeadlineProps> = ({
    label,
    tint,
    ...rest
}) => {
    return (
        <StyleHeadline tint={ tint } { ...rest }>{ label }</StyleHeadline>
    )
}

export default Headline