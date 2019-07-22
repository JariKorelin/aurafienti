import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Button from "../components/button"
import { rhythm } from "../utils/typography"

function FrontpageIntroduction({ locale, content }) {
  const localeUrl = locale === "en" ? "/en" : `/${locale}`

  return (
    <Container>
      {content.map(({ node }) => {
        return (
          <div key={node.id}>
            <MainHeading>{node.frontmatter.title}</MainHeading>
            <p>{node.frontmatter.introduction}</p>
            <Link to={`${localeUrl}/${node.frontmatter.buttonLink}/`}>
              <Button marginBottom="40px" marginLeft="auto" marginRight="auto">
                {node.frontmatter.buttonText}
              </Button>
            </Link>
          </div>
        )
      })}
    </Container>
  )
}

const MainHeading = styled.h1`
  margin-top: ${rhythm(1)};
`

const Container = styled.div`
  text-align: center;
`

export default FrontpageIntroduction
