/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ["@happyclass/ui"],
	},
};

export default nextConfig;