import { Button, Text, Input } from "@happyclass/ui";

export default function Page() {
	return (
		<main className="min-h-screen">
			<section className="container mx-auto px-6 py-16">
				<div className="grid items-center gap-12 md:grid-cols-2">
					<div>
						<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-text-primary">
							HappyClass.AI
						</h1>
						<Text className="mt-4 max-w-prose">
							It plans. It posts. You teach. Generate aligned, engaging lessons in minutes.
						</Text>
						<div className="mt-6 flex gap-3">
							<Input placeholder="Photosynthesis" aria-label="Topic" className="max-w-xs" />
							<Button>Generate</Button>
						</div>
					</div>
					<div className="rounded-lg bg-panel p-8 shadow-lg">
						<Text tone="secondary">Preview</Text>
						<div className="mt-4 h-48 rounded-md border border-line"></div>
					</div>
				</div>
			</section>
		</main>
	);
}