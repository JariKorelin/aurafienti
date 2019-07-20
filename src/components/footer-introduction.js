import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

function FooterIntroduction({ content, locale }) {
  return (
    <Wrapper>
      <Container>
        {content.map(({ node }) => {
          if (node.frontmatter.locale !== locale) return false

          return (
            <>
              <h2 style={{ marginTop: rhythm(1) }}>
                {node.frontmatter.sectionHeading}
              </h2>
              <h2 style={{ marginTop: rhythm(1) }}>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.introduction}</p>
            </>
          )
        })}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: lightgray;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default FooterIntroduction
