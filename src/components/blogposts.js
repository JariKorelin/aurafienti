import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

function BlogPosts({ posts }) {
  return (
    <div style={{ margin: "20px 0 40px" }}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <div key={node.fields.slug}>
            {node.frontmatter.tags.map(tag => (
              <Tag>{tag}</Tag>
            ))}
            <h3
              style={{
                marginTop: rhythm(1 / 4),
                marginBottom: rhythm(1 / 4),
              }}
            >
              <Link style={{ boxShadow: `none` }} to={`${node.fields.slug}`}>
                {title}
              </Link>
            </h3>
            <small>{node.frontmatter.date}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

const Tag = styled.span`
  background-color: #f0f0f0;
  padding: ${rhythm(0.25)};
  margin-right: ${rhythm(0.25)};
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`

export default BlogPosts
