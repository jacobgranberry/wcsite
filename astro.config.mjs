// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import markdoc from "@astrojs/markdoc";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "WesterosCraft Wiki",
      logo: {
        light: "./src/assets/dark-logo.svg",
        dark: "./src/assets/light-logo.svg",
        replacesTitle: true,
      },
      customCss: [
        "@fontsource/judson/400.css",
        "@fontsource/judson/700.css",
        "@fontsource/gothic-a1/400.css",
        "./src/styles/custom.css",
      ],
      social: {
        github: "https://github.com/WesterosCraft/website",
        discord: "https://discord.com/invite/pBS5TH4",
        twitter: "https://twitter.com/westeroscraft",
        youtube: "https://youtube.com/@WesterosCraft",
      },
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "/wiki/docs/getting-started" },
        },
        {
          label: "Building",
          autogenerate: { directory: "/wiki/docs/building" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "/wiki/docs/guides" },
        },
        {
          label: "Builds by Region",
          items: [
            {
              label: "Beyond the Wall",
              autogenerate: { directory: "builds/beyond-the-wall" },
              collapsed: true,
            },
            {
              label: "Crownlands",
              autogenerate: { directory: "/builds/crownlands" },
              collapsed: true,
            },
            {
              label: "Dorne",
              autogenerate: { directory: "/builds/dorne" },
              collapsed: true,
            },
            {
              label: "Iron Islands",
              autogenerate: { directory: "wiki/builds/iron-islands" },
              collapsed: true,
            },
            {
              label: "North",
              autogenerate: { directory: "wiki/builds/north" },
              collapsed: true,
            },
            {
              label: "Reach",
              autogenerate: { directory: "wiki/builds/reach" },
              collapsed: true,
            },
            {
              label: "Riverlands",
              autogenerate: { directory: "wiki/builds/riverlands" },
              collapsed: true,
            },
            {
              label: "Stormlands",
              autogenerate: { directory: "wiki/builds/stormlands" },
              collapsed: true,
            },
            {
              label: "The Wall",
              autogenerate: { directory: "wiki/builds/the-wall" },
              collapsed: true,
            },
            {
              label: "Vale",
              autogenerate: { directory: "wiki/builds/vale" },
              collapsed: true,
            },
            {
              label: "Westerlands",
              autogenerate: { directory: "wiki/builds/westerlands" },
              collapsed: true,
            },
          ],
        },
      ],
      components: {
        // Sidebar: "./src/overrides/Sidebar.astro",
      },
    }),
    markdoc(),
    react(),
    tailwind({ applyBaseStyles: false }),
  ],

  output: "server",
  adapter: cloudflare({ imageService: "cloudflare" }),
});
