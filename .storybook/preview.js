import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export const decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: "#efefef",
      },
      {
        name: "dark",
        value: "#181818",
      },
    ],
  },
};
