import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

function walk(dir: string): string[] {
	const out: string[] = [];
	for (const name of readdirSync(dir)) {
		const p = path.join(dir, name);
		if (statSync(p).isDirectory()) out.push(...walk(p));
		else if (/\.(ts|tsx)$/.test(name)) out.push(p);
	}
	return out;
}

describe("clsx usage", () => {
	it("is only imported from lib/utils (cn wrapper)", () => {
		const files = [...walk("app"), ...walk("lib")].filter(
			(f) => !f.endsWith(`${path.sep}utils.ts`),
		);
		for (const file of files) {
			const src = readFileSync(file, "utf8");
			expect(src, file).not.toMatch(/from ["']clsx["']/);
		}
	});
});
