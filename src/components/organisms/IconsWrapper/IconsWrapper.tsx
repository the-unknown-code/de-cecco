import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TooltipIcon, { TooltipIconProps } from "../../atoms/TooltipIcon/TooltipIcon";
import bg from '../../../images/bg-placeholder.jpg'

import {
  StyledIconsWrapper,
  StyledIconsWrapperTooltipHolder,
  StyledIconsWrapperTitle,
  StyledIconsWrapperSubtitle,
  StyledIconsWrapperTooltipGrid,
} from "./IconsWrapper.style";

interface IconsArray extends Array<TooltipIconProps> {}

interface IconsWrapper {
  title: string
  subtitle: string,
  certificates?: IconsArray,
  properties?: IconsArray,
  icons?: IconsArray
}

const IconsWrapper: React.VFC<IconsWrapper> = ({ title, subtitle, certificates, properties, icons }) => {
  return (
    <StyledIconsWrapper>
      <img className="bg" src={bg} alt={bg} />
      <StyledIconsWrapperTitle>{title}</StyledIconsWrapperTitle>
      <StyledIconsWrapperSubtitle>{subtitle}</StyledIconsWrapperSubtitle>

      { certificates  && 
      <StyledIconsWrapperTooltipHolder style={{ zIndex: 3 }}>
        <Swiper slidesPerView={3}>
           { certificates.map(({ ...props }) => <SwiperSlide><TooltipIcon {...props} /></SwiperSlide>) }
        </Swiper>
      </StyledIconsWrapperTooltipHolder>
      }

       { properties  && 
       <StyledIconsWrapperTooltipHolder style={{ zIndex: 2 }}>
        <Swiper slidesPerView={4}>
           { properties.map(({ ...props }) => <SwiperSlide><TooltipIcon {...props} /></SwiperSlide>) }
        </Swiper>
      </StyledIconsWrapperTooltipHolder>
      }

      
      <StyledIconsWrapperTooltipGrid>
        { icons && icons.map(({ ...props }) => <TooltipIcon {...props} />) }
      </StyledIconsWrapperTooltipGrid>

    </StyledIconsWrapper>
  );
};

export default IconsWrapper;
