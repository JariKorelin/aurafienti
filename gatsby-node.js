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
                title
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
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      // const previous = index === posts.length - 1 ? null : posts[index + 1].node
      // const next = index === 0 ? null : posts[index - 1].node

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
            slug: post.node.fields.slug,
            // previous,
            // next,
          },
        })
      }
    })

    return null
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
