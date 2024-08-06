/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Work Dog Gillian A`,
    description: "Professional software engineer with polyglot expertise.",
    author: "Gillian Akpeki",
    siteUrl: `https://wdga.xyz/`,
    image: '/site-image.png',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `Work Dog Gillian A`,
        short_name: `Gillian A`,
        description: `Professional software engineer with polyglot expertise.`,
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
