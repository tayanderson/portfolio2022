/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    menu: [
      { name: "Work", to: "/" },
      { name: "About", to: "/about" },
      { name: "Services", to: "/services" },
      { name: "Contact", to: "/contact" },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/tayloranderson1/",
      github: "https://github.com/tayanderson",
    },
    locale: "en",
    title: `Taylor Anderson`,
    description: `Web Designer & Front-end Developer based in Chicago, IL.`,
    author: `Taylor Anderson`,
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-postcss`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "6095311407",
          "G-N8BPYJJZG6", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true
        }
      },
    },
  ],
}
