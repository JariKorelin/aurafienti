import React from "react"
import { Link, graphql } from "gatsby"
import FrontpageIntroduction from "../components/frontpage-introduction"
import Layout from "../components/layout"
import BlogPosts from "../components/blogposts"
import SEO from "../components/seo"
import Button from "../components/button"
import { SectionHeading } from "../utils/styledComponents"
import { rhythm } from "../utils/typography"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { locale } = this.props.pageContext
    const siteTitle = data.site.siteMetadata.title
    const posts = data.blogPosts.edges

    return (
      <Layout location={this.props.location} title={siteTitle} locale={locale}>
        <SEO title="Aurafienti" />
        <FrontpageIntroduction
          locale={locale}
          content={data.frontpageIntroduction.edges}
        />
        <SectionHeading style={{ marginTop: rhythm(1) }}>
          {locale === "en" ? "The latest posts" : "Uusimmat kirjoitukset"}
        </SectionHeading>
        <BlogPosts posts={posts} />
        <Link to={`/${locale}/blog/`}>
          <Button secondary marginTop="40px">
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
      limit: 2
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
            date(formatString: "MMMM DD, YYYY", locale: $locale)
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
            buttonText
            buttonLink
          }
        }
      }
    }
  }
`
