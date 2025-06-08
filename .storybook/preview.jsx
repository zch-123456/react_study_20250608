import {
  Title,
  Subtitle,
  Description,
  Primary,
  Controls,
  Stories
} from "@storybook/blocks";
import React from "react";
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
    // docs: {
    //   page() {
    //     return (
    //       <>
    //         <Title />
    //       </>
    //     )
    //   }
    // }
  }
};

export default preview;
