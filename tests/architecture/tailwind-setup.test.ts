import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const root = process.cwd();

function read(rel: string): string {
	return readFileSync(path.join(root, rel), "utf8");
}

function exists(rel: string): boolean {
	return existsSync(path.join(root, rel));
}

describe("tailwind 4 setup", () => {
	it.each([
		"tailwind.config.js",
		"tailwind.config.mjs",
		"tailwind.config.cjs",
		"tailwind.config.ts",
		"postcss.config.js",
	])("legacy config %s must not exist", (rel) => {
		expect(exists(rel)).toBe(false);
	});

	it("registers only the @tailwindcss/postcss plugin", () => {
		const config = read("postcss.config.mjs");
		expect(config).toContain("@tailwindcss/postcss");
		expect(config).not.toContain("autoprefixer");
	});

	it("imports tailwind via CSS-first entrypoint", () => {
		const css = read("app/assets/globals.css");
		expect(css).toContain('@import "tailwindcss"');
		expect(css).not.toMatch(/@tailwind\s+(base|components|utilities)/);
	});

	it("maps the font-mono utility to the loaded monospace font", () => {
		const css = read("app/assets/globals.css");
		expect(css).toMatch(/@theme\s*\{[^}]*--font-mono:\s*var\(--font-monospace\)/);
	});
});
