/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: "",
          pathname: '/your-path/**',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
          port: "",
          pathname: '/your-path/**',
        },
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: "",
          pathname: '/your-path/**',
        },
      ],
    },
  }

export default nextConfig;