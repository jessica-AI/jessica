/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
    /* Your site config here */
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
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
        }
    ],
};
