/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// Writable build dir — legacy `.next/` is owned by nobody and cannot be cleared from this environment
	distDir: ".next-build",
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
