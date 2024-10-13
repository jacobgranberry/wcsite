import { defineMarkdocConfig, component } from "@astrojs/markdoc/config";
import starlightMarkdoc from '@astrojs/starlight-markdoc';

export default defineMarkdocConfig({
    extends: [starlightMarkdoc()],
  tags: {
    // callout: {
    //     render: component("./src/components/callout.astro"),
    //     attributes: {
    //       content: { type: String },
    //       type: { type: String, default: "default" },
    //     },
    //   },
  },
});
