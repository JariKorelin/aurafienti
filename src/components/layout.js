import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Header from "../components/header"
import FooterIntroduction from "../components/footer-introduction"
import { rhythm } from "../utils/typography"

const Layout = ({ children, locale }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      footerIntroduction: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "footer-introduction" } } }
      ) {
        edges {
          node {
            frontmatter {
              sectionHeading
              title
              introduction
              locale
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Header locale={locale} />
      <Container>{children}</Container>
      <FooterIntroduction
        locale={locale}
        content={data.footerIntroduction.edges}
      />
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Container = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
