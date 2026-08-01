import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("gitignore agent docs", () => {
	it("ignores .superpowers/ and docs/superpowers/", () => {
		const gitignore = readFileSync(
			path.join(process.cwd(), ".gitignore"),
			"utf8",
		);
		expect(gitignore).toMatch(/(^|\n)\.superpowers\/?(\n|$)/);
		expect(gitignore).toMatch(/(^|\n)docs\/superpowers\/?(\n|$)/);
	});
});
