/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Web Developer Gillian A`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@root': path.resolve(__dirname),
        },
        extensions: ['js'],
      },
    },
  ],
};
