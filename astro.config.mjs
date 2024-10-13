// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightImageZoom()],
      title: "WesterosCraft Wiki",
      logo: {
        light: "./src/assets/dark-logo.svg",
        dark: "./src/assets/light-logo.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/WesterosCraft/website",
        discord: "https://discord.com/invite/pBS5TH4",
        twitter: "https://twitter.com/westeroscraft",
        youtube: "https://youtube.com/@WesterosCraft",
      },
      sidebar: [
        { label: "Home", link: "/wiki" },
        {
          label: "Getting Started",
          autogenerate: { directory: "wiki/getting-started" },
        },
        {
          label: "Building",
          autogenerate: { directory: "wiki/building" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "wiki/guides" },
        },
        {
          label: "Builds by Region",
          items: [
            {
              label: "Beyond the Wall",
              autogenerate: { directory: "wiki/builds/beyond-the-wall" },
              collapsed: true,
            },
          ],
        },
      ],
    }),
    markdoc(),
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
});
