const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
    query MyQuery {
      allWpPage {
        pages: edges {
          page: node {
            title
            id
            slug
          }
        }
      }
    }
  `).then(result => {
        result.data.allWpPage.pages.forEach(({ page }) => {
            createPage({
                path: page.slug === 'home' ? '/' : page.slug,
                component: path.resolve(`./src/templates/Page.tsx`),
                context: {
                    id: page.id,
                    slug: page.slug,
                },
            })
        })
    })
}

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
    type WpBlockAttributesObject {
      foobar: String
    }
  `;
    createTypes(typeDefs);
};