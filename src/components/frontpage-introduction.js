import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

function FrontpageIntroduction({ content }) {
  return (
    <Container>
      {content.map(({ node }) => {
        return (
          <>
            <h1 style={{ marginTop: rhythm(1) }}>{node.frontmatter.title}</h1>
            <p>{node.frontmatter.introduction}</p>
          </>
        )
      })}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: white;
  z-index: 10;
  position: relative;
  margin-top: ${rhythm(-3)};
  border-radius: 0 50px 0 0;
`

export default FrontpageIntroduction
