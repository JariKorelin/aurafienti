import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { SectionHeading } from "../utils/styledComponents"

function FooterIntroduction({ content, locale }) {
  return (
    <Wrapper>
      <Container>
        {content.map(({ node }) => {
          if (node.frontmatter.locale !== locale) return false

          return (
            <div key={node.id}>
              <SectionHeading style={{ marginTop: rhythm(1) }}>
                {node.frontmatter.sectionHeading}
              </SectionHeading>
              <h2 style={{ marginTop: rhythm(1) }}>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.introduction}</p>
            </div>
          )
        })}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #f4f4f4;
`

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(26)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default FooterIntroduction
