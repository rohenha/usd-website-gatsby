var autoprefixer = require('autoprefixer');
require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-tsconfig-paths',
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["FACEBOOK_GRAPH_TOKEN", "FACEBOOK_APP_ID"]
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
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [autoprefixer()],
      },
    },
  ]
}
