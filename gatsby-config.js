require('dotenv').config()

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: ["1283563708338161"], // Can be either a numeric ID or the URL ID
        params: {
          fields: 'hours, posts { message, created_time }', // See Facebooks API to see what you can query for
        },
        key: process.env.FACEBOOK_GRAPH_TOKEN, // You will need to create a Facebook application and go through review in order to get an API token.
        version: '8.0'
      }
    },
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
