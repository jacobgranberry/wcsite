---
title: WesterosCraft Wiki
description: Get started exploring Westeros from by exploring our compiled wiki of things from application guidelines, project details and histories and more.
template: splash
hero:
  title: WesterosCraft Wiki
  tagline: Get started exploring Westeros from by exploring our compiled wiki of things from application guidelines, project details and histories and more.
  image:
    alt: Kings Landing Streets
    file: ../../../assets/kl2.png
  actions:
    - text: Explore the wiki
      link: /wiki/getting-started/apply-to-build
      icon: right-arrow
    - text: Learn to join the server
      link: /getting-started/new-visitors-guide
      icon: external
      variant: minimal
      attrs:
        rel: me
---

import { Card, CardGrid } from '@astrojs/starlight/components';

## Next steps

<CardGrid stagger>
	<Card title="Update content" icon="pencil">
		Edit `src/content/docs/index.mdx` to see this page change.
	</Card>
	<Card title="Add new content" icon="add-document">
		Add Markdown or MDX files to `src/content/docs` to create new pages.
	</Card>
	<Card title="Configure your site" icon="setting">
		Edit your `sidebar` and other config in `astro.config.mjs`.
	</Card>
	<Card title="Read the docs" icon="open-book">
		Learn more in [the Starlight Docs](https://starlight.astro.build/).
	</Card>
</CardGrid>
