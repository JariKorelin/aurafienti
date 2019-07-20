const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const locales = require("./src/constants/locales")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                locale
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    // Filter out the static content so we don't create pages for those
    const posts = result.data.allMarkdownRemark.edges.filter(edge => {
      if (
        edge.node.frontmatter.templateKey === "frontpage-introduction" ||
        edge.node.frontmatter.templateKey === "footer-introduction"
      ) {
        return false
      } else {
        return true
      }
    })

    posts.forEach(post => {
      // Check if pages has a template key
      const locale = post.node.frontmatter.locale
      if (post.node.frontmatter.templateKey != null) {
        const id = post.node.id

        createPage({
          path: post.node.fields.slug,
          component: path.resolve(
            `src/templates/${String(post.node.frontmatter.templateKey)}.js`
          ),
          context: {
            id,
            locale,
          },
        })
      }
    })
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path

      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang,
        },
      })
    })
    resolve()
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
