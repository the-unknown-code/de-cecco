import React from "react";
import CoverMedia from '../../atoms/CoverMedia/CoverMedia'
import SimpleButton from "../../atoms/SimpleButton/SimpleButton";
import Label from "../../atoms/Label/Label";
import { StyledBannerWrapper, StyledBannerContentWrapper, StyledBannerTitle } from './Banner.style'

interface BannerProps {
    label?: string,
    title: string,
    buttonLabel: string,
    media: string
}

const Banner:React.VFC<BannerProps> = ({
    label,
    title,
    buttonLabel,
    media
}) => {
    return (
        <StyledBannerWrapper>
            <CoverMedia media={media} />
            <StyledBannerContentWrapper>
                { label && <Label tint="yellow" label={label} /> }
                <StyledBannerTitle>{ title }</StyledBannerTitle>
                <SimpleButton tint="cyan" label={ buttonLabel } />
            </StyledBannerContentWrapper>
        </StyledBannerWrapper>
    )
}

export default Banner