import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

function FrontpageIntroduction() {
  return (
    <StaticQuery
      query={frontpageDescriptionQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <Container>
            <p>
              Lorem ipsum <strong>{author}</strong> dolor sit amet.
            </p>
          </Container>
        )
      }}
    />
  )
}

const frontpageDescriptionQuery = graphql`
  query frontpageDescriptionQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default FrontpageIntroduction
