import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

function ContactSection({ content, locale }) {
  return (
    <Wrapper>
      <Container>
        {content.map(({ node }) => {
          if (node.frontmatter.locale !== locale) return false

          return (
            <div key={node.id}>
              <h2 style={{ marginTop: rhythm(1) }}>
                {node.frontmatter.sectionHeading}
              </h2>
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          )
        })}
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

export default ContactSection
