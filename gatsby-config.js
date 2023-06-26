/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Web Developer Gillian A`,
    description: "Professional web developer specialised in front-end and full-stack frameworks and accessibility.",
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
        name: `Web Developer Gillian A`,
        short_name: `Gillian A`,
        description: `Professional web developer specialised in front-end and full-stack frameworks and accessibility.`,
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
