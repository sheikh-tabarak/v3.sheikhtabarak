/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/blog/:path*', // Match any path under /blog
        destination: '/api/blog/:path*', // Forward to the API route
      },
    ]
  },

  // reactStrictMode: true,
  // // target: 'serverless',
  // experimental: {
  //   appDir: true,
  // },
  // async redirects() {
  //   return [
  //     {
  //       source: '/(.*)', // This regex matches all paths
  //       destination: '/', // Redirect to home page
  //       permanent: true, // Use a 308 Permanent Redirect
  //     },
  //   ];
  // },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,

// };

// export default nextConfig;
