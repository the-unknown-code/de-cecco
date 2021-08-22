import React from 'react';
import Headline from '../Headline/Headline'
import { StyledItem, StyledItemBackground, StyledItemWrapper, StyledItemContent, StyledItemTitle, Type, TYPES } from './Item.style'


interface CategoryItemProps {
    title: string,
    headline: string,
    media: string,
    mediaAlt?: string,
    type: Type
}

const CategoryItem: React.VFC<CategoryItemProps> = ({
    title,
    headline,
    media,
    mediaAlt,
    type,
    ...rest
}) => {
    return (
        <StyledItem { ...rest }>
            <StyledItemBackground src={ media } alt={ mediaAlt } />
            <StyledItemWrapper type={ type }>
                <StyledItemContent type={ type }>
                    <Headline label={ headline } tint={ type === TYPES.category ? 'white' : 'blue'} />
                    <StyledItemTitle>{ title }</StyledItemTitle>
                </StyledItemContent>
            </StyledItemWrapper>
        </StyledItem>
    )
}

export default CategoryItem