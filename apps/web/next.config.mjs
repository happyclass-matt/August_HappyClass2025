/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		optimizePackageImports: ["@happyclass/ui"],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	headers: async () => [
		{
			source: "/:path*",
			headers: [
				{ key: "X-Frame-Options", value: "SAMEORIGIN" },
				{ key: "X-Content-Type-Options", value: "nosniff" },
				{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
				{ key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
			],
		},
	],
};

export default nextConfig;