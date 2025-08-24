import type { PlaywrightTestConfig } from "@playwright/test";

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

const config: PlaywrightTestConfig = {
	testDir: "./tests/e2e",
	webServer: {
		command: `pnpm dev -p ${PORT}`,
		port: PORT,
		reuseExistingServer: !process.env.CI,
	},
	use: { baseURL: `http://localhost:${PORT}` },
};

export default config;

