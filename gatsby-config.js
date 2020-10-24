/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

const autoprefixer = require('autoprefixer');

module.exports = {
    /* Your site config here */
    siteMetadata: {
        siteUrl: 'https://ljcheng.tw'
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [{ userAgent: '*', allow: '/' }]
            }
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `3k9qvpytla02`,
                accessToken: process.env.ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    autoprefixer
                ],
                precision: 8
            }
        }
    ],
};
