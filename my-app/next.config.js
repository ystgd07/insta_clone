/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['emilyannebondoc.files.wordpress.com', 'upload.wikimedia.org', 'www.jennexplores.com'],
    },
};

module.exports = nextConfig;
