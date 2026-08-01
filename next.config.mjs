/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
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
