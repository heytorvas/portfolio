import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

type Pkg = {
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
};

function readPkg(): Pkg {
	return JSON.parse(
		readFileSync(path.join(process.cwd(), "package.json"), "utf8"),
	) as Pkg;
}

describe("dependency policy", () => {
	it("does not depend on removed MDX stack or Biome", () => {
		const pkg = readPkg();
		const all = { ...pkg.dependencies, ...pkg.devDependencies };
		for (const name of [
			"gray-matter",
			"next-mdx-remote",
			"remark-gfm",
			"rehype-highlight",
			"@biomejs/biome",
			"@tailwindcss/typography",
		]) {
			expect(all[name], name).toBeUndefined();
		}
	});

	it("stays on React 18 and Tailwind 3 ranges", () => {
		const pkg = readPkg();
		expect(pkg.dependencies?.react).toMatch(/\b18\./);
		expect(pkg.dependencies?.["react-dom"]).toMatch(/\b18\./);
		expect(pkg.devDependencies?.tailwindcss).toMatch(/\b3\./);
	});

	it("aligns Next and its ESLint config on 16.x", () => {
		const pkg = readPkg();
		expect(pkg.dependencies?.next).toMatch(/\b16\./);
		expect(pkg.devDependencies?.["eslint-config-next"]).toMatch(/\b16\./);
	});
});
