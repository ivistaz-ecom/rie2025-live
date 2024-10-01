/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com',
      },
    ],
  },
}

export default nextConfig
