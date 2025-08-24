import { test, expect } from "@playwright/test";

test("homepage loads and can generate", async ({ page }) => {
	await page.goto("/");
	await expect(page.getByRole("heading", { name: "HappyClass.AI" })).toBeVisible();
	const input = page.getByRole("textbox", { name: "Topic" });
	await input.fill("Photosynthesis");
	await page.getByRole("button", { name: "Generate" }).click();
	await expect(page.getByText("Preview")).toBeVisible();
	await expect(page.getByText("Engaging Lesson")).toBeVisible({ timeout: 5000 });
});

