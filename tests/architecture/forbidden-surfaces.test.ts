import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

function exists(rel: string): boolean {
	return existsSync(path.join(root, rel));
}

function findFilesNamed(dir: string, filename: string): string[] {
	const matches: string[] = [];
	if (!existsSync(dir)) return matches;

	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const entryPath = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			matches.push(...findFilesNamed(entryPath, filename));
		} else if (entry.name === filename) {
			matches.push(entryPath);
		}
	}

	return matches;
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

describe("forbidden surfaces (app/components must not be App Router routes)", () => {
	it("no page.tsx exists under app/components/**", () => {
		const offenders = findFilesNamed(
			path.join(root, "app/components"),
			"page.tsx",
		);
		expect(offenders).toEqual([]);
	});
});
