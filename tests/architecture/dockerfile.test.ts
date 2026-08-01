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

	it("uses a maintained (non-EOL) Node LTS base image", () => {
		expect(dockerfile).not.toMatch(/node:20/);
		expect(dockerfile).toMatch(/node:22-alpine/);
	});

	it("ships a .dockerignore", () => {
		expect(existsSync(path.join(process.cwd(), ".dockerignore"))).toBe(
			true,
		);
	});
});

describe("docker-compose", () => {
	const compose = readFileSync(
		path.join(process.cwd(), "docker-compose.yml"),
		"utf8",
	);

	it("builds and runs the production image without overlaying it with source", () => {
		expect(compose).toContain("build: .");
		expect(compose).not.toMatch(/:\s*["']?\.\/:\/app/);
		expect(compose).not.toContain("/app/node_modules");
	});

	it("exposes port 3000", () => {
		expect(compose).toMatch(/3000:3000/);
	});
});
