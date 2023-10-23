import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	base: "./",
	plugins: [react(), viteTsconfigPaths()],
	server: {
		open: false,
		port: 4000,
		// proxy: {
		// 	"/api": {
		// 		target: import.meta.env.VITE_API_BASE_URL as string,
		// 		changeOrigin: true,
		// 	},
		// },
	},
});
