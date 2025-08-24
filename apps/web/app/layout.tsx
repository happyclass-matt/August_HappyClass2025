export const metadata = {
	title: "HappyClass.AI",
	description: "It plans. It posts. You teach.",
};

import "@happyclass/ui/src/styles/tokens.css";
import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				{children}
			</body>
		</html>
	);
}