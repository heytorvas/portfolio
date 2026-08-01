#!/usr/bin/env node
// Runs the Next.js "standalone" production server (see next.config.mjs
// `output: "standalone"`). `next start` isn't supported in standalone mode,
// so this copies the two asset folders Next intentionally omits from the
// standalone output (public/ and <distDir>/static) alongside server.js,
// mirroring what the Dockerfile does for the container image, then starts it.
import { existsSync, cpSync } from "node:fs";
import { spawn } from "node:child_process";
import path from "node:path";

const distDir = process.env.NEXT_DIST_DIR || ".next";
const standaloneDir = path.join(distDir, "standalone");
const serverPath = path.join(standaloneDir, "server.js");

if (!existsSync(serverPath)) {
	console.error(
		`Could not find ${serverPath}. Run "npm run build" first` +
			(process.env.NEXT_DIST_DIR
				? "."
				: ` (set NEXT_DIST_DIR to match the build if you overrode it).`),
	);
	process.exit(1);
}

const publicSrc = path.resolve("public");
if (existsSync(publicSrc)) {
	cpSync(publicSrc, path.join(standaloneDir, "public"), { recursive: true });
}

const staticSrc = path.join(distDir, "static");
if (existsSync(staticSrc)) {
	cpSync(staticSrc, path.join(standaloneDir, distDir, "static"), {
		recursive: true,
	});
}

const child = spawn(process.execPath, [serverPath], {
	stdio: "inherit",
	env: process.env,
});

child.on("exit", (code, signal) => {
	if (signal) {
		process.kill(process.pid, signal);
	} else {
		process.exit(code ?? 0);
	}
});
