import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { SectionHeading } from "../utils/styledComponents"
import Button from "../components/button"
import Image from "gatsby-image"

function FooterIntroduction({ content, avatar, locale }) {
  const localeUrl = locale === "en" ? "/en" : `/${locale}`

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
              <Row>
                <Col>
                  <Image
                    fluid={avatar.childImageSharp.fluid}
                    alt="Jari Korelin"
                    style={{
                      marginRight: rhythm(1 / 2),
                      marginBottom: 0,
                      marginLeft: "auto",
                      marginRight: "auto",
                      minWidth: 150,
                      borderRadius: "100%",
                    }}
                    imgStyle={{
                      borderRadius: "50%",
                    }}
                  />
                  <NameTitle>
                    <strong>Jari Korelin</strong>
                    <p>CEO &amp; Founder</p>
                  </NameTitle>
                </Col>
                <Col>
                  <h2
                    style={{ marginTop: rhythm(0), marginBottom: rhythm(0.5) }}
                  >
                    {node.frontmatter.title}
                  </h2>
                  <p>{node.frontmatter.introduction}</p>
                  <Link to={`${localeUrl}/${node.frontmatter.buttonLink}/`}>
                    <Button marginBottom="20px">
                      {node.frontmatter.buttonText}
                    </Button>
                  </Link>
                </Col>
              </Row>
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

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 540px) {
    flex-direction: row;
  }
`

const Col = styled.div`
  @media screen and (min-width: 540px) {
    &:first-child {
      width: calc(33% - ${rhythm(1)});
      margin-right: ${rhythm(1)};
    }

    &:last-child {
      width: 66%;
    }
  }
`

const NameTitle = styled.div`
  margin-top: ${rhythm(0.5)};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default FooterIntroduction
