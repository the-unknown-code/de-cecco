import styled from 'styled-components'
import { colors, fonts } from '../../styles/theme';

export const TYPES = {
	category: 'category',
	product: 'product',
};



const typeKeys = Object.keys(TYPES) as Array<keyof typeof TYPES>;
export type Type = typeof typeKeys[number];

interface StyledCategoryItemProps {
    type: Type
}



const getItemVariant = (type: Type) => {
    if(type === TYPES.category) {
        return `
            --item-color: ${colors.yellow};
            --item-background: ${colors.cyan};
            --item-label-size: 1.5rem;
            --item-padding: 1rem;
            --item-width: 100%;
            --item-border-radius: 0 0 .35rem .35rem;
        `   
    }
    
    return `
        --item-color: ${colors.cyan};
        --item-background: ${colors.white};
        --item-label-size: 1rem;
        --item-padding: 0rem;
        --item-width: calc(100% - 80px);
        --item-border-radius: 0;
    `
}


export const StyledItem = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    `

export const StyledItemWrapper = styled.div<StyledCategoryItemProps>`

    ${({ type }) => getItemVariant(type)};

    position: relative;
    padding: var(--item-padding);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    items-align: center;
    box-sizing: border-box;
    `

export const StyledItemContent = styled.div<StyledCategoryItemProps>`

    ${({ type }) => getItemVariant(type)};

    position: relative;
    width: var(--item-width);
    height: auto;
    color: var(--item-color);
    background-color: var(--item-background);
    padding: 0 .85rem .85rem .85rem;
    border-radius: var(--item-border-radius);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    items-align: center;
    margin: 0 auto;

    &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3rem;
        border-radius: 50%;
        background-color:  var(--item-background);
        top: -1.35rem;
        left: 0;
    }

    > p {
        font-size: var(--item-label-size);
    }
    `

export const StyledItemTitle = styled.p`
    position: relative;
    width: 100%;
    text-align: center;
    margin: .35rem 0 0 0;
    
    font-family: ${fonts.kinney.family};
    line-height: 1.15;	
    `