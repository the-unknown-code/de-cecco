import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Input from '../../atoms/Input/Input'
import SimpleButton from "../../atoms/SimpleButton/SimpleButton";
import CheckboxLabel from "../../atoms/CheckboxLabel/CheckboxLabel";
import Icon from "../../atoms/Icon/Icon";
import SocialIcon from "../../atoms/SocialIcon/SocialIcon";
import { FooterWrapper, FooterNewsletterContainer, FooterTitle, FooterDescription, FooterInputWrapper, FooterIconsContainer, FooterIconsContainerMobile, FooterLinksWrapper, FooterLinksGrid, FooterLink, FooterSocialWrapper } from './Footer.style'
import 'swiper/swiper-bundle.css'

interface Link {
    label: string,
    href: string,
    target?: string
}


interface LinksArray extends Array<Link> {}

interface FooterProps { 
    newsletterTitle: string,
    newsletterDescription: string,
    linksTitle: string,
    linksArray: LinksArray,
    followUsTitle: string
}


const Footer: React.VFC<FooterProps> = ({ 
    newsletterTitle,
    newsletterDescription,
    linksTitle,
    linksArray,
    followUsTitle
}) => {

    return (
        <FooterWrapper>
            <FooterNewsletterContainer>
                <FooterTitle>{ newsletterTitle }</FooterTitle>
                <FooterDescription>{ newsletterDescription }</FooterDescription>
                <FooterInputWrapper>
                 <Input tint="cyan" placeholder="Il tuo indirizzo email" type="email" />
                 <SimpleButton tint="white" label="Iscriviti adesso" />
                </FooterInputWrapper>
                <CheckboxLabel label="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam nunc, interdum id mauris eu, ullamcorper maximus nisi. Cras aliquet fringilla lorem ut efficitur." />
            </FooterNewsletterContainer>
            <FooterIconsContainer>
                <li>
                    <Icon icon="https://picsum.photos/100" label="Lorem ipsum dolor sit amet" />
                </li>
                <li>
                    <Icon icon="https://picsum.photos/120" label="Sed quam nunc adipiscing elit" />
                </li>
                <li>
                    <Icon icon="https://picsum.photos/130" label="Fringilla lorem ut efficitur" />
                </li>
            </FooterIconsContainer>
            <FooterIconsContainerMobile>
                <Swiper slidesPerView={2} centeredSlides={true} >
                    <SwiperSlide>
                     <Icon icon="https://picsum.photos/100" label="Lorem ipsum dolor sit amet" />
                    </SwiperSlide>
                    <SwiperSlide>
                     <Icon icon="https://picsum.photos/120" label="Lorem ipsum dolor sit amet" />
                    </SwiperSlide>
                    <SwiperSlide>
                     <Icon icon="https://picsum.photos/130" label="Lorem ipsum dolor sit amet" />
                    </SwiperSlide>
                </Swiper>
            </FooterIconsContainerMobile>
            <FooterLinksWrapper>
                 <FooterTitle>{ linksTitle }</FooterTitle>
                 <FooterLinksGrid>
                     { linksArray.map(({ label, href, target }) => <FooterLink href={href} target={target || '_blank'}>{ label }</FooterLink>) }
                 </FooterLinksGrid>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                 <FooterTitle>{ followUsTitle }</FooterTitle>
                 <FooterSocialWrapper>
                    <SocialIcon icon="https://picsum.photos/140" href="https://www.google.it" />
                    <SocialIcon icon="https://picsum.photos/140" href="https://www.google.it" />
                    <SocialIcon icon="https://picsum.photos/140" href="https://www.google.it" />
                 </FooterSocialWrapper>
            </FooterLinksWrapper>
        </FooterWrapper>
    )
}

export default Footer