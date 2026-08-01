import { describe, expect, it } from "vitest";
import { about } from "@/lib/content/about";
import { experiences } from "@/lib/content/experiences";
import { educations } from "@/lib/content/educations";

describe("content loaders", () => {
	it("exposes about summary without unused social payload", () => {
		expect(about.summary.length).toBeGreaterThan(20);
		expect(about).not.toHaveProperty("social_network");
		expect(about).not.toHaveProperty("address");
		expect(about).not.toHaveProperty("user");
	});

	it("exposes typed experiences with local logos", () => {
		expect(experiences.length).toBeGreaterThan(0);
		expect(experiences[0]?.company).toBeTruthy();
		expect(experiences.every((e) => e.logo.startsWith("/logos/"))).toBe(
			true,
		);
	});

	it("exposes typed educations with local logos", () => {
		expect(educations.length).toBeGreaterThan(0);
		expect(educations.every((e) => e.logo.startsWith("/logos/"))).toBe(
			true,
		);
	});
});
