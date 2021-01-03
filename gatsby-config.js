/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-react-helmet', {
    resolve: `gatsby-source-contentstack`,
    options: {
      api_key: process.env.apiKey,
      delivery_token: process.env.deliveryToken,
      environment: process.env.environment,
      cdn: 'https://eu-cdn.contentstack.com/v3',
      expediteBuild: false,
      downloadImages: true
    },
  },
  {
    resolve: `gatsby-plugin-google-gtag`,
     options: {
       // You can add multiple tracking ids and a pageview event will be fired for all of them.
       trackingIds: [
         "G-XWYWZX3KH7"
       ],
     },
  }
  ],
}
