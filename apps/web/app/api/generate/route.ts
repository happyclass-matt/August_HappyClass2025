import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const { topic } = await request.json().catch(() => ({ topic: "" }));
	const safeTopic = typeof topic === "string" && topic.trim() ? topic.trim() : "Lesson";
	return NextResponse.json({
		lesson: {
			title: `${safeTopic}: An Engaging Lesson`,
			objectives: [
				`Define key concepts of ${safeTopic}`,
				`Explain why ${safeTopic} matters in real life`,
				`Demonstrate understanding via a short exit ticket`,
			],
			materials: ["Projector", "Handouts", "Interactive activity"],
			activities: [
				{ type: "Do Now", durationMin: 5, description: `Predict what ${safeTopic} involves.` },
				{ type: "Mini-Lesson", durationMin: 10, description: `Introduce ${safeTopic} with visuals.` },
				{ type: "Guided Practice", durationMin: 15, description: `Work examples with peers.` },
				{ type: "Exit Ticket", durationMin: 5, description: `Answer 3 questions on ${safeTopic}.` },
			],
		},
	});
}

