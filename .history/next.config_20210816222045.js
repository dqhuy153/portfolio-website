const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com'],
    },
};