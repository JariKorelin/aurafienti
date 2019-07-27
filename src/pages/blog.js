import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BlogPosts from "../components/blogposts"
import SEO from "../components/seo"
import Button from "../components/button"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const { locale } = this.props.pageContext
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle} locale={locale}>
        <SEO title="Aurafienti" />
        <Heading>{locale === "en" ? "Archive" : "Arkisto"}</Heading>
        <BlogPosts posts={posts} />
        <Link to={locale === "en" ? "/en" : "/"}>
          <Button secondary marginTop="40px">
            {locale === "en" ? "Back to frontpage" : "Takaisin etusivulle"}
          </Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query allBlogPosts($locale: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
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
  }
`

const Heading = styled.h1`
  margin-top: ${rhythm(1)};
  text-align: center;
`
