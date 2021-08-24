import React from "react";
import Label,{ LabelProps } from "../../atoms/Label/Label";
import { StyledListing, StyledListingImage, StyledListingWrapper, StyledListingTitle, StyledListingPrice, StyledListingDiscount } from './Listing.style'

interface LabelPropsArray extends Array<LabelProps> {}

interface ListingProps {
    title: string,
    media: string,
    mediaAlt?: string,
    favorite?: boolean,
    labels: LabelPropsArray,
    price: string,
    discount?: string
}

const Listing:React.VFC<ListingProps> = ({
    title,
    media,
    mediaAlt,
    favorite,
    price,
    discount,
    labels = []
}) => {
    return (
        <StyledListing>
            <StyledListingImage>
                <img src={media} alt={mediaAlt} />
            </StyledListingImage>
            <StyledListingWrapper>
                <div>
                    { labels.map(({ label, tint }) => <Label label={label} tint={tint}></Label>) }
                </div>
                <StyledListingTitle>{ title }</StyledListingTitle>
                <div>
                    <StyledListingPrice>{ price }</StyledListingPrice>
                    { discount && <StyledListingDiscount>{ discount }</StyledListingDiscount> }
                </div>
            </StyledListingWrapper>
        </StyledListing>
    )
}

export default Listing