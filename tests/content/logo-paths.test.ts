import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

type WithLogo = { logo: string };

function readJson<T>(rel: string): T {
	return JSON.parse(
		readFileSync(path.join(process.cwd(), rel), "utf8"),
	) as T;
}

describe("content logo paths", () => {
	it("experiences and educations use local /logos/*.png only", () => {
		const experiences = readJson<WithLogo[]>("public/api/experiences.json");
		const educations = readJson<WithLogo[]>("public/api/educations.json");
		const logos = [...experiences, ...educations].map((row) => row.logo);

		expect(logos.length).toBeGreaterThan(0);
		for (const logo of logos) {
			expect(logo).toMatch(/^\/logos\/[a-z0-9-]+\.png$/);
			expect(
				readFileSync(path.join(process.cwd(), "public", logo.slice(1))),
			).toBeInstanceOf(Buffer);
		}
	});
});
