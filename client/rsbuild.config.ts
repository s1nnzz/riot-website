import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	html: {
		title: "Riot Games. Developer of League of Legends, VALORANT, Teamfight Tactics, Legends of Runeterra, and Wild Rift. Creators of Arcane. Home of LOL and VALORANT Esports. | Riot Games",
		favicon: "./public/favicon.ico",
	},
	root: ".",
});
