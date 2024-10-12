// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "WesterosCraft Wiki",
      logo: {
        light: './src/assets/dark-logo.svg',
        dark: './src/assets/light-logo.svg',
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/WesterosCraft/website",
      },
      sidebar: [
        { label: "Home", link: "/docs" },
        {
          label: "Getting Started",
          autogenerate: { directory: "docs/getting-started" },
        },
        {
          label: "Building",
          autogenerate: { directory: "docs/building" },
        },
      ],
    }),
    markdoc(),
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
