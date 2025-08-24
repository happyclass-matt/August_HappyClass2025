"use client";
export default function Error({ error }: { error: Error & { digest?: string } }) {
	return (
		<div className="container mx-auto px-6 py-16">
			<h2 className="text-xl font-semibold">Something went wrong</h2>
			<p className="mt-2 text-text-muted">{error.message}</p>
		</div>
	);
}

