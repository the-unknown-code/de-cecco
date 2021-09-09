import React, { useState } from "react";
import { StyledTooltipIconWrapper, StyledTooltipIcon, StyledTooltipIconTitle, StyledTooltipIconCTA, StyledTooltipIconHolder, Size } from './TooltipIcon.style'

export interface TooltipIconProps {
    icon: string,
    title: string,
    size: Size,
    dropShadow: boolean,
    tooltip?: string,
}

const TooltipIcon: React.VFC<TooltipIconProps> = ({ 
    icon,
    title,
    size = 'default',
    dropShadow = false,
    tooltip = '',
    ...rest
}) => {

    const [hoverValue, setValue] = useState(false);
    let timeout: any;

    const autoHide = () => {
        if(timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            setValue(false);
        }, 3000)
    }

    return (
        <StyledTooltipIconWrapper style={{zIndex: hoverValue ? 3 : 'inherit'}}>
            <StyledTooltipIcon size={ size } dropShadow={ dropShadow }>
                <img src={icon} alt={icon} />
            </StyledTooltipIcon>
            <StyledTooltipIconTitle data-type={size} >{ title }</StyledTooltipIconTitle>
            <StyledTooltipIconCTA   onMouseOver={() => { setValue(true); autoHide(); }} onMouseOut={() => { setValue(false) }}  />
            { tooltip && hoverValue && <StyledTooltipIconHolder><span>{ tooltip }</span></StyledTooltipIconHolder> }
        </StyledTooltipIconWrapper>
    )
}

export default TooltipIcon;