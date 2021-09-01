import React from "react";
import SimpleButton from "../../atoms/SimpleButton/SimpleButton";
import Headline from "../../atoms/Headline/Headline";
import { StyledThankYouWrapper, StyledThankYouContentWrapper, StyledThankYouTitle, StyledThankYouDescription } from './ThankYou.style'

interface ThankYouProps {
    title: string,
    description: string,
    buttonLabel: string
}

const ThankYou:React.VFC<ThankYouProps> = ({
    title,
    description,
    buttonLabel,
}) => {
    return (
        <StyledThankYouWrapper>
            <StyledThankYouContentWrapper>
                <Headline tint="blue" label="Tutto è andato a buon fine" />
                <StyledThankYouTitle>{ title }</StyledThankYouTitle>
                <StyledThankYouDescription>{ description }</StyledThankYouDescription>
                <SimpleButton tint="cyan" label={ buttonLabel } />
            </StyledThankYouContentWrapper>
        </StyledThankYouWrapper>
    )
}

export default ThankYou