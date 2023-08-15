/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.discordapp.com',
            port: '',
            pathname: '/**',
          },
        ],
    },
    experimental: {
      serverActions: true
    },
    
}

module.exports = nextConfig
