/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "steel-junction.onrender.com",
        pathname: "/uploads/**", // Allow images from this specific path
      },
    ],
  },
};

export default nextConfig;
