/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['encrypted-tbn0.gstatic.com', 'www.unitins.br']
  },
  redirects: async () => {
    return [
      {
        source: '/profile',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
