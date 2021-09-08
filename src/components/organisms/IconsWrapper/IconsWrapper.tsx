import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TooltipIcon from "../../atoms/TooltipIcon/TooltipIcon";
import bg from '../../../images/bg-placeholder.jpg'

import {
  StyledIconsWrapper,
  StyledIconsWrapperTooltipHolder,
  StyledIconsWrapperTitle,
  StyledIconsWrapperSubtitle,
} from "./IconsWrapper.style";

interface IconsWrapper {
  title: string;
  subtitle: string;
}

const IconsWrapper: React.VFC<IconsWrapper> = ({ title, subtitle }) => {
  return (
    <StyledIconsWrapper>
      <img className="bg" src={bg} alt={bg} />
      <StyledIconsWrapperTitle>{title}</StyledIconsWrapperTitle>
      <StyledIconsWrapperSubtitle>{subtitle}</StyledIconsWrapperSubtitle>
      <StyledIconsWrapperTooltipHolder>
        <Swiper slidesPerView={3}>
          <SwiperSlide>
            <TooltipIcon
              size="default"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={false}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TooltipIcon
              size="default"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={false}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TooltipIcon
              size="default"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
        </Swiper>
      </StyledIconsWrapperTooltipHolder>
      <StyledIconsWrapperTooltipHolder>
        <Swiper slidesPerView={4}>
          <SwiperSlide>
            <TooltipIcon
              size="default"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TooltipIcon
              size="default"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TooltipIcon
              size="default"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TooltipIcon
              size="default"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
        </Swiper>
      </StyledIconsWrapperTooltipHolder>
      <StyledIconsWrapperTooltipHolder>
        <Swiper slidesPerView={3}>
          <SwiperSlide>
            <TooltipIcon
              size="small"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TooltipIcon
              size="small"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
          <SwiperSlide>
            <TooltipIcon
              size="small"
              icon="https://picsum.photos/121"
              title="Icon 1"
              dropShadow={true}
              tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </SwiperSlide>
        </Swiper>
      </StyledIconsWrapperTooltipHolder>
    </StyledIconsWrapper>
  );
};

export default IconsWrapper;
