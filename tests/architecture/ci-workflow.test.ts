import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("CI workflow", () => {
	const yaml = readFileSync(
		path.join(process.cwd(), ".github/workflows/ci.yml"),
		"utf8",
	);

	it("runs lint and tests in a quality job", () => {
		expect(yaml).toContain("quality:");
		expect(yaml).toContain("npm ci");
		expect(yaml).toContain("npm run lint");
		expect(yaml).toMatch(/npm test|npm run test/);
		expect(yaml).toContain("npm run build");
	});

	it("runs on a maintained (non-EOL) Node LTS version", () => {
		expect(yaml).not.toMatch(/node-version:\s*["']?20["']?/);
		expect(yaml).toMatch(/node-version:\s*["']?22["']?/);
	});

	it("does not pin Trivy to @master", () => {
		expect(yaml).not.toContain("trivy-action@master");
		expect(yaml).toMatch(
			/aquasecurity\/trivy-action@[0-9a-f]{40}|aquasecurity\/trivy-action@v?[0-9]+\.[0-9]+\.[0-9]+/,
		);
	});
});
