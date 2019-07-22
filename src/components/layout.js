import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import Header from "../components/header"
import FooterIntroduction from "../components/footer-introduction"
import ContactSection from "../components/contact-section"
import { rhythm } from "../utils/typography"

const Layout = ({ children, locale }) => {
  const theme = {
    mainColor: "#007acc",
    mainColorDark: "#015e9c",
  }

  const contactRef = useRef(null)

  const data = useStaticQuery(graphql`
    query FooterQuery {
      footerIntroduction: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "footer-introduction" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              sectionHeading
              title
              introduction
              locale
              buttonText
              buttonLink
            }
          }
        }
      }
      contactSection: allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "contact-section" } } }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              sectionHeading
              locale
            }
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header contactRef={contactRef} locale={locale} />
        <Container>{children}</Container>
        <FooterIntroduction
          locale={locale}
          content={data.footerIntroduction.edges}
        />
        <span ref={contactRef}></span>
        <ContactSection locale={locale} content={data.contactSection.edges} />
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Container = styled.main`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(26)};
  padding: ${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(2.5)};

  background-color: white;
  z-index: 10;
  position: relative;
  margin-top: ${rhythm(-1.5)};
  border-radius: 0 50px 0 0;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
  margin-top: ${rhythm(1.5)};
`

export default Layout
