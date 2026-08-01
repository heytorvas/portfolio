/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Override with NEXT_DIST_DIR if the local `.next/` is unwritable; defaults to the Next.js standard.
	distDir: process.env.NEXT_DIST_DIR || ".next",
	pageExtensions: ["js", "jsx", "ts", "tsx"],
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "encrypted-tbn0.gstatic.com",
			},
			{
				protocol: "https",
				hostname: "www.unitins.br",
			},
		],
	},
	redirects: async () => [
		{
			source: "/profile",
			destination: "/",
			permanent: true,
		},
	],
};

export default nextConfig;
