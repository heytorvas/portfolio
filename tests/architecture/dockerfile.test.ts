import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("Docker production image", () => {
	const dockerfile = readFileSync(
		path.join(process.cwd(), "Dockerfile"),
		"utf8",
	);

	it("does not serve next dev", () => {
		expect(dockerfile).not.toMatch(/npm run dev|next dev/);
	});

	it("uses npm ci and a production start command", () => {
		expect(dockerfile).toContain("npm ci");
		expect(dockerfile).toMatch(/next start|node server\.js/);
	});

	it("ships a .dockerignore", () => {
		expect(existsSync(path.join(process.cwd(), ".dockerignore"))).toBe(
			true,
		);
	});
});
