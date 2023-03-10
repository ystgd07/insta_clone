/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            'emilyannebondoc.files.wordpress.com',
            'upload.wikimedia.org',
            'www.jennexplores.com',
            'pbs.twimg.com',
            'mblogthumb-phinf.pstatic.net',
            'mobiinsidecontent.s3.ap-northeast-2.amazonaws.com',
            'encrypted-tbn0.gstatic.com',
            'lh3.googleusercontent.com',
        ],
    },
};

module.exports = nextConfig;
