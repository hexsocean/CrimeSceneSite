import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  // Enable Solid to support Solid JSX components.
  site: "https://hexsocean.github.io",
  base: "CrimeSceneSite",
  integrations: [solid()],
  // server: {
  // 	fs: {
  // 	// Allow serving files from one level up to the project root
  // 	allow: [searchForWorkspaceRoot(process.cwd())]
  // 	}
  // }
});
