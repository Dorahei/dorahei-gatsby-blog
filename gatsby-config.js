/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const env = process.env
// console.log(env.CONTENTFUL_SPACE_ID)
// console.log(env.CONTENTFUL_ACCESS_TOKEN)
// console.log(env.CONTENTFUL_HOST)
// console.log(env.GATSBY_TRACKING_ID)
//console.log(env.GTAG_TRACKING_ID)
//console.log(env.GOOGLE_ADSENCE_ID)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `DORAHEI LOOSE LIFE`,
    description: ` うつ病の闘病記と社会復帰のブログ`,
    lang: `ja`,
    siteUrl: `https://dorahei.com.netlify.app`,
    locale: `ja_JP`,
    fbappid: `XXXXXXXXXXXXXXXXXXXXX`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingIds: env.GTAG_TRACKING_ID,
        pluginConfig: {
          head: true,
          anonymize: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: env.GOOGLE_ADSENCE_ID
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
         plugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400
            }
          }
        ]
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DORAHEI LOOSE LIFE | ドラヘイの生活`,
        short_name: `DORAHEI | ドラヘイの生活`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#479454`,
        display: `standalone`,
        icon: `src/images/Dorahei_icon.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: env.CONTENTFUL_SPACE_ID,
        accessToken: env.CONTENTFUL_ACCESS_TOKEN,
        host: env.CONTENTFUL_HOST,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // `gatsby-plugin-offline`,
  ],
}
