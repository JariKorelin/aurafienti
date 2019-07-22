import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

class BlogPostTemplate extends React.Component {
  render() {
    const { locale } = this.props.pageContext
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} locale={locale}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Date>{post.frontmatter.date}</Date>
        <Heading>{post.frontmatter.title}</Heading>
        <Hr />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`

const Heading = styled.h1`
  margin-top: ${rhythm(0.25)};
  text-align: center;
`

const Date = styled.p`
  text-align: center;
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(0)};
`

const Hr = styled.hr`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`
