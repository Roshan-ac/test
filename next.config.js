/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },
      images:{
        remotePatterns:[{
          protocol:'https',
          hostname:'cashkr.blr1.cdn.digitaloceanspaces.com'
        }]
      }
}

module.exports = nextConfig
