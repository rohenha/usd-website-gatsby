const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        graphql(`
            {
                teams: allDatoCmsTeam {
                    edges {
                        node {
                            slug
                        }
                    }
                }
                products: allDatoCmsProduct {
                    edges {
                        node {
                            slug
                        }
                    }
                }
            }
        `).then(result => {
            result.data.teams.edges.map(({ node: team }) => {
                createPage({
                    path: `equipes/${team.slug}`,
                    component: path.resolve("./src/templates/team.tsx"),
                    context: {
                    slug: team.slug
                    }
                });
            });
            result.data.products.edges.map(({ node: product }) => {
                createPage({
                    path: `boutique/${product.slug}`,
                    component: path.resolve("./src/templates/product.tsx"),
                    context: {
                        slug: product.slug
                    }
                });
            });
            resolve();
        });
    });
};
