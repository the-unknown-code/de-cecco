import React from "react";
import Input from '../../atoms/Input/Input'
import SimpleButton from "../../atoms/SimpleButton/SimpleButton";
import { FooterWrapper, FooterNewsletterContainer, FooterTitle, FooterDescription, FooterInputWrapper } from './Footer.style'

interface FooterProps {

}

const Footer: React.VFC<FooterProps> = () => {

    return (
        <FooterWrapper>
            <FooterNewsletterContainer>
                <FooterTitle>Title</FooterTitle>
                <FooterDescription>Iscriviti alla nostra newsletter e resta aggiornato su tutte le ultime novità, promozioni ed eventi. Cosa aspetti?</FooterDescription>
                <FooterInputWrapper>
                 <Input tint="cyan" placeholder="Il tuo indirizzo email" />
                 <SimpleButton tint="white" label="Iscriviti adesso" />
                </FooterInputWrapper>
            </FooterNewsletterContainer>
        </FooterWrapper>
    )
}

export default Footer