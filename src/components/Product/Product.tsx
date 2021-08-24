import React, { useState } from "react";
import Headline from '../atoms/Headline/Headline'
import CoverMedia from "../atoms/CoverMedia/CoverMedia";
import { StyledProductWrapper, StyledProductTitle, StyledProductMediaWrapper, StyleProductLabel } from './Product.style'

type Status = 'hover' | 'default'

interface ProductProps {
    headline: string,
    title: string,
    media: string,
    mediaHover: string,
    productLabel: string,
}

const Product: React.VFC<ProductProps> = ({
    headline,
    title,
    media,
    mediaHover,
    productLabel
}) => {

    const [ url,setUrl ] = useState(media)
   
    return (
        <StyledProductWrapper key={media}>
            <div style={{ width: '100%', display:'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Headline tint="blue" label={ headline } />
                <StyledProductTitle>{ title }</StyledProductTitle>
            </div>
            
            <StyledProductMediaWrapper onMouseOver={(e) => { setUrl(mediaHover) }} onMouseOut={(e) => { setUrl(media) }} > 
                <CoverMedia media={url} mediaAlt={url} />
            </StyledProductMediaWrapper>
         
            <StyleProductLabel>{ productLabel }</StyleProductLabel>
        </StyledProductWrapper>
    )
}

export default Product