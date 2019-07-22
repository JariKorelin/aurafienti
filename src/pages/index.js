import React from "react"
import { Link, graphql } from "gatsby"
import FrontpageIntroduction from "../components/frontpage-introduction"
import Layout from "../components/layout"
import BlogPosts from "../components/blogposts"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { locale } = this.props.pageContext
    const localeUrl = locale === "en" ? "" : `/${locale}`
    const siteTitle = data.site.siteMetadata.title
    const posts = data.blogPosts.edges

    return (
      <Layout location={this.props.location} title={siteTitle} locale={locale}>
        <SEO title="Aurafienti" />
        <FrontpageIntroduction content={data.frontpageIntroduction.edges} />
        <BlogPosts posts={posts} />
        <Link to={`${localeUrl}/blog/`}>
          <Button marginTop="85px">
            {locale === "en" ? "View archive" : "Vanhemmat kirjoitukset"}
          </Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query siteData($locale: String) {
    site {
      siteMetadata {
        title
      }
    }

    blogPosts: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          templateKey: { eq: "blog-post" }
          locale: { eq: $locale }
        }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tags
            title
            description
            locale
          }
        }
      }
    }

    frontpageIntroduction: allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { eq: "frontpage-introduction" }
          locale: { eq: $locale }
        }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            introduction
          }
        }
      }
    }
  }
`
