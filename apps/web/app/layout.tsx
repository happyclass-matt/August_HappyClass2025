export const metadata = {
	title: "HappyClass.AI",
	description: "It plans. It posts. You teach.",
	metadataBase: new URL("https://happyclass.ai"),
	viewport: {
 		width: "device-width",
 		initialScale: 1,
 		maximumScale: 1,
 		userScalable: false,
 	},
 	openGraph: {
 		title: "HappyClass.AI",
 		description: "It plans. It posts. You teach.",
 		url: "https://happyclass.ai",
 		siteName: "HappyClass.AI",
 		images: [
 			{
 				url: "/og.png",
 				width: 1200,
 				height: 630,
 				alt: "HappyClass.AI",
 			},
 		],
 		type: "website",
 	},
};

import "@happyclass/ui/src/styles/tokens.css";
import "./globals.css";
import type { ReactNode } from "react";
import { ThemeProvider } from "./providers";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Inter, Source_Serif_4 } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-ui" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-display" });

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
			<body>
				<ThemeProvider>
					<Header />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}