import React from 'react';
import { StyledCategoryItem, StyledCategoryItemBackground } from './CategoryItem.style'

interface CategoryItemProps {
    title?: string,
    headline?: string,
    media: string,
    mediaAlt?: string,
}

const CategoryItem: React.VFC<CategoryItemProps> = ({
    title,
    headline,
    media,
    mediaAlt,
    ...rest
}) => {
    return (
        <StyledCategoryItem { ...rest }>
            <StyledCategoryItemBackground src={ media } alt={ mediaAlt } />
        </StyledCategoryItem>
    )
}

export default CategoryItem