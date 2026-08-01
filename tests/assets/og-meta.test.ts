import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("open graph asset", () => {
	it("ships public/og.png", () => {
		expect(existsSync(path.join(process.cwd(), "public/og.png"))).toBe(true);
	});

	it("layout metadata references the Heytor-branded OG image", () => {
		const layout = readFileSync(
			path.join(process.cwd(), "app/layout.tsx"),
			"utf8",
		);

		expect(layout).toContain('url: "/og.png"');
		expect(layout).toContain("Heytor Victor");
		expect(layout).not.toContain("Alex Pate");
	});
});
