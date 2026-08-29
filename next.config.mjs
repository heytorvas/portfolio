/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Vercel traces the deployment itself. standalone + Next 16 Turbopack
	// omits .next/next-server.js.nft.json and fails onBuildComplete.
	...(process.env.VERCEL ? {} : { output: "standalone" }),
	distDir: process.env.NEXT_DIST_DIR || ".next",
	redirects: async () => [
		{
			source: "/profile",
			destination: "/",
			permanent: true,
		},
	],
};

export default nextConfig;
