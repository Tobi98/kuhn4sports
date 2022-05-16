/** @type {import('next').NextConfig} */
/** @type {import('next-sitemap').IConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        localeDetection: false,
        locales: ['de'],
        defaultLocale: 'de'
    },
    redirects: [
        {
            source: '/global/*',
            destination: '/',
            permanent: true
        }
    ],
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
        });

        return config;
    },
    env: {
        REACT_APP_COOKIEBOT: process.env.REACT_APP_COOKIEBOT,
        REACT_APP_STORYBLOK: process.env.REACT_APP_STORYBLOK
    }
};

module.exports = nextConfig;
