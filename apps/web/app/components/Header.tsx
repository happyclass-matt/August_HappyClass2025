"use client";
import Link from "next/link";
import { ThemeToggle } from "../(components)/ThemeToggle";

export function Header() {
	return (
		<header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur">
			<div className="container mx-auto flex items-center justify-between px-6 py-3">
				<Link href="/" className="text-sm font-semibold tracking-tight">
					HappyClass.AI
				</Link>
				<div className="flex items-center gap-2">
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}

