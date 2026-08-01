import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

function exists(rel: string): boolean {
	return existsSync(path.join(root, rel));
}

describe("forbidden surfaces (posts / MDX)", () => {
	it.each([
		"app/posts",
		"posts",
		"lib/articles.ts",
		"mdx-components.tsx",
		"app/components/posts",
		"app/components/recents",
		"app/components/article-link.tsx",
		"app/assets/github-dark.css",
	])("%s must not exist", (rel) => {
		expect(exists(rel)).toBe(false);
	});
});

describe("forbidden surfaces (projects)", () => {
	it.each([
		"app/components/projects",
		"public/brazilian-worker.png",
		"public/curriculum.png",
	])("%s must not exist", (rel) => {
		expect(exists(rel)).toBe(false);
	});
});
