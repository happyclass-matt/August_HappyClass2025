import type { Preview } from "@storybook/react";
import "../src/styles/tokens.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "canvas",
      values: [
        { name: "canvas", value: "#fffcf6" },
        { name: "panel", value: "#ffffff" }
      ]
    },
    options: { storySort: { order: ["Foundation", "Primitives"] } }
  }
};

export default preview;

