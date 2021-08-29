import React from "react";
import { FooterWrapper, FooterNewsletterContainer, FooterTitle } from './Footer.style'

interface FooterProps {

}

const Footer: React.VFC<FooterProps> = () => {

    return (
        <FooterWrapper>
            <FooterNewsletterContainer>
                <FooterTitle>Title</FooterTitle>
            </FooterNewsletterContainer>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </FooterWrapper>
    )
}

export default Footer