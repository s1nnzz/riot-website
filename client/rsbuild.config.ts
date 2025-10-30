import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	html: {
		title: "Riot Games",
	},
	server: {
		proxy: {
			"/api": "http://localhost:5000",
		},
	},
});
