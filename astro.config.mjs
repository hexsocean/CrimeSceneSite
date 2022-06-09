import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	// Enable Solid to support Solid JSX components.
	site: "https://hexsocean.github.io",
	base: "year9-t2-innovations-crime-scene-site",
	integrations: [solid()],
});
