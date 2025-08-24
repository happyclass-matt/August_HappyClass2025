import { type MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "HappyClass.AI",
		short_name: "HappyClass",
		description: "It plans. It posts. You teach.",
		start_url: "/",
		display: "standalone",
		background_color: "#fffcf6",
		theme_color: "#1e63ff",
		icons: [
			{ src: "/icon-192.png", type: "image/png", sizes: "192x192" },
			{ src: "/icon-512.png", type: "image/png", sizes: "512x512" }
		],
	};
}

