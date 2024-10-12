import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
  tags: {
    callout: {
        render: component("./src/components/callout.astro"),
        attributes: {
          content: { type: String },
          type: { type: String, default: "default" },
        },
      },
  },
});