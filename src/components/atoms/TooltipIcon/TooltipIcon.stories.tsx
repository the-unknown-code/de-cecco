import React from "react";
import { Meta } from "@storybook/react";
import TooltipIcon from "./TooltipIcon";
import { Size } from "./TooltipIcon.style";

export default {
  title: "Components/Atoms/TooltipIcon",
  component: TooltipIcon,
  argTypes: {
    dropShadow: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
} as Meta;

export const Small: React.VFC<{ dropShadow: boolean }> = ({ dropShadow }) => (
  <TooltipIcon
    icon="https://picsum.photos/122"
    title="Formati Corti"
    tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum leo nunc, vitae pharetra massa rhoncus nec."
    size="small"
    dropShadow={dropShadow}
  />
);
export const Default: React.VFC<{ dropShadow: boolean }> = ({ dropShadow }) => (
  <TooltipIcon
    icon="https://picsum.photos/122"
    title="Formati Corti"
    tooltip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum leo nunc, vitae pharetra massa rhoncus nec."
    size="default"
    dropShadow={dropShadow}
  />
);
