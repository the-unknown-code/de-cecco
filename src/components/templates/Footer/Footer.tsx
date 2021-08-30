import React from "react";
import Input from '../../atoms/Input/Input'
import SimpleButton from "../../atoms/SimpleButton/SimpleButton";
import CheckboxLabel from "../../atoms/CheckboxLabel/CheckboxLabel";
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
                 <Input tint="cyan" placeholder="Il tuo indirizzo email" type="email" />
                 <SimpleButton tint="white" label="Iscriviti adesso" />
                </FooterInputWrapper>
                <CheckboxLabel label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam nunc, interdum id mauris eu, ullamcorper maximus nisi. Cras aliquet fringilla lorem ut efficitur." />
            </FooterNewsletterContainer>
        </FooterWrapper>
    )
}

export default Footer