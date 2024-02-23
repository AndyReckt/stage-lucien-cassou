/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: '*',
            }
        ],
        // domains: ['i.imgur.com', "developers.elementor.com"],
    },
};

export default nextConfig;
