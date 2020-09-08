require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["FACEBOOK_GRAPH_TOKEN"]
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import "${__dirname}/src/styles/site";`,
      }
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      }
    }
  ]
}
