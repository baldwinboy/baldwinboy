/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `WDGA`,
    description: "Professional software engineer and multidisciplinary artist",
    author: "Gabriel Duraye",
    siteUrl: `https://wdga.xyz/`,
    image: '/site-image.png',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `WDGA`,
        short_name: `WDGA`,
        description: `Professional software engineer and multidisciplinary artist`,
        lang: `en`,
        icon: 'src/images/icon.png',
        start_url: `/`,
        background_color: `#080510`,
        theme_color: `#d48430`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@root': path.resolve(__dirname),
          '@components': path.resolve(__dirname, 'src/components'),
        },
        extensions: ['js'],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
  ],
};
