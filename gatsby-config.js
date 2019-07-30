module.exports = {
  siteMetadata: {
    title: `Aurafienti`,
    description: `Aurafienti Oy on turkulainen vientiä ja viennin edistämistä harjoittava yritys. Yrityksen missiona on auttaa innovatiivisia suomalaisia ruoka- ja juoma-alan yrityksiä tukevaan kasvuun Aasian markkinoilla.`,
    author: `Jari Korelin`,
    siteUrl: `https://aurafienti.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/templates`,
        name: `templates`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-vscode`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-67313224-2`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aurafienti`,
        short_name: `Aurafienti`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4f8dc5`,
        display: `minimal-ui`,
        icon: `content/assets/icon-aurafienti.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
