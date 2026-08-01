import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

type Pkg = {
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
	scripts?: Record<string, string>;
	engines?: Record<string, string>;
};

function readPkg(): Pkg {
	return JSON.parse(
		readFileSync(path.join(process.cwd(), "package.json"), "utf8"),
	) as Pkg;
}

/** Matches a semver range pinned to `major`, anchored so `^3.4.17` cannot pass for 4. */
function majorRange(major: number): RegExp {
	return new RegExp(`^[\\^~]?${major}\\.`);
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
			"autoprefixer",
		]) {
			expect(all[name], name).toBeUndefined();
		}
	});

	it("stays on React 19 and Tailwind 4 ranges", () => {
		const pkg = readPkg();
		expect(pkg.dependencies?.react).toMatch(majorRange(19));
		expect(pkg.dependencies?.["react-dom"]).toMatch(majorRange(19));
		expect(pkg.devDependencies?.tailwindcss).toMatch(majorRange(4));
		expect(pkg.devDependencies?.["@tailwindcss/postcss"]).toMatch(majorRange(4));
	});

	it("keeps tailwind-merge on the Tailwind 4 compatible major", () => {
		const pkg = readPkg();
		expect(pkg.dependencies?.["tailwind-merge"]).toMatch(majorRange(3));
	});

	it("aligns Next and its ESLint config on 16.x", () => {
		const pkg = readPkg();
		expect(pkg.dependencies?.next).toMatch(majorRange(16));
		expect(pkg.devDependencies?.["eslint-config-next"]).toMatch(majorRange(16));
	});

	it("does not use `next start`, which is unsupported with output: standalone", () => {
		const pkg = readPkg();
		expect(pkg.scripts?.start).not.toMatch(/next start/);
		expect(pkg.scripts?.start).toMatch(/standalone|server\.js/);
	});

	it("requires a maintained (non-EOL) Node LTS version", () => {
		const pkg = readPkg();
		expect(pkg.engines?.node).toMatch(/>=\s*22/);
	});
});
