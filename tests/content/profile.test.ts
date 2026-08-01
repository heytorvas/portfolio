import { describe, expect, it } from "vitest";
import {
	RESUME_URL,
	contactMethods,
	sameAs,
	personJsonLd,
} from "@/lib/content/profile";

describe("profile", () => {
	it("exposes resume and contact methods", () => {
		expect(RESUME_URL).toMatch(/^https:\/\//);
		expect(contactMethods.map((c) => c.method)).toEqual([
			"Email",
			"GitHub",
			"LinkedIn",
			"Telegram",
		]);
	});

	it("keeps JSON-LD sameAs aligned with public profiles", () => {
		expect(sameAs).toEqual(
			expect.arrayContaining([
				"https://www.github.com/heytorvas",
				"https://www.linkedin.com/in/heytorvictor/",
			]),
		);
		expect(personJsonLd.sameAs).toEqual(sameAs);
		expect(personJsonLd.name).toBe("Heytor Victor");
	});
});
