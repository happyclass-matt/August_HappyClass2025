"use client";
import { Button, Text, Input } from "@happyclass/ui";
import { useState, useTransition } from "react";

type GenerateResponse = { lesson: { title: string; objectives: string[]; materials: string[]; activities: { type: string; durationMin: number; description: string }[] } };

export default function Page() {
	const [topic, setTopic] = useState("");
	const [result, setResult] = useState<GenerateResponse | null>(null);
	const [isPending, startTransition] = useTransition();

	async function onGenerate() {
		setResult(null);
		startTransition(async () => {
			const res = await fetch("/api/generate", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ topic }),
			});
			const data = await res.json();
			setResult(data);
		});
	}

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
							<Input
								placeholder="Photosynthesis"
								aria-label="Topic"
								className="max-w-xs"
								value={topic}
								onChange={(e) => setTopic(e.target.value)}
							/>
							<Button onClick={onGenerate} disabled={isPending}>
								{isPending ? "Generating…" : "Generate"}
							</Button>
						</div>
					</div>
					<div className="rounded-lg bg-panel p-8 shadow-lg">
						<Text tone="secondary">Preview</Text>
						<div className="mt-4 min-h-48 rounded-md border border-line p-4 text-sm whitespace-pre-wrap">
							{result ? JSON.stringify(result, null, 2) : "Enter a topic and click Generate."}
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}