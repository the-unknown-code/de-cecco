import React from "react";
import { StyledSocialIcon } from './SocialIcon.style'

interface SocialIconProps {
    icon: string,
    href: string
}

const SocialIcon:React.VFC<SocialIconProps> = ({
    icon,
    href
}) => {
    return (
        <StyledSocialIcon href={href} target="_blank" rel="noreferrer">
            <img src={icon} alt={icon} />
        </StyledSocialIcon>
    )
}

export default SocialIcon