import React from 'react'
import { StyledCoverMedia } from './CoverMedia.style'

interface CoverMediaProps {
    media: string,
    mediaAlt?: string
}

const CoverMedia: React.VFC<CoverMediaProps> = ({
    media,
    mediaAlt = "",
    ...rest
}) => {
    return (
        <StyledCoverMedia src={media} alt={mediaAlt} />
    )
}

export default CoverMedia