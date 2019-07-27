import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

function BlogPosts({ posts }) {
  return (
    <Wrapper>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug

        return (
          <Item key={node.fields.slug} to={`${node.fields.slug}`}>
            {node.frontmatter.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
            <Date>{node.frontmatter.date}</Date>
            <h3
              style={{
                marginTop: rhythm(1 / 2),
                marginBottom: rhythm(1 / 4),
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "15px",
                color: "rgba(0, 0, 0, 0.9)",
                marginBottom: 0,
              }}
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            />
          </Item>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${rhythm(-0.5)};
`

const Item = styled(props => <Link {...props} />)`
  width: 100%;
  background-color: #f4f4f4;
  padding: ${rhythm(0.75)};
  margin: ${rhythm(0.5)};
  border-radius: 0 25px 0 0;
  box-shadow: 0 10px 50px -20px rgba(0, 0, 0, 0.05);
  transition: all, 0.25s;

  @media screen and (min-width: 640px) {
    width: calc(50% - ${rhythm(1)});
  }

  &:hover {
    background-color: #f7f7f7;
    box-shadow: 0 20px 50px -20px rgba(0, 0, 0, 0.15);
  }
`

const Date = styled.small`
  display: block;
  color: rgba(0, 0, 0, 0.9);
  margin-top: ${rhythm(0.5)};
  margin-bottom: ${rhythm(-0.25)};
`

const Tag = styled.span`
  background-color: white;
  color: black;
  padding: ${rhythm(0.25)};
  margin-right: ${rhythm(0.25)};
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`

export default BlogPosts
