import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import logoImage from "../../content/assets/logo-aurafienti.svg"

function Header({ locale }) {
  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        return (
          <header
            style={{
              position: "relative",
              padding: `${rhythm(1)}`,
              minHeight: "300px",
              maxHeight: "400px",
            }}
          >
            <Image
              fluid={data.heroImage.childImageSharp.fluid}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                zIndex: "-1",
              }}
            />
            <LanguageBar>
              <Link
                to="/"
                style={{
                  color: "white",
                  margin: `0 ${rhythm(3 / 4)}`,
                }}
              >
                <p style={{ marginBottom: "0" }}>In English</p>
              </Link>
              <Link
                to="/fi"
                style={{
                  color: "white",
                  margin: `0 ${rhythm(0.1)}`,
                }}
              >
                <p style={{ marginBottom: "0" }}>Suomeksi</p>
              </Link>
            </LanguageBar>
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={locale === "en" ? "/" : "/fi"}
            >
              <div
                style={{
                  marginLeft: `auto`,
                  marginRight: `auto`,
                  maxWidth: rhythm(24),
                  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
              >
                <img src={logoImage} alt="Aurafienti logo" />
              </div>
            </Link>
          </header>
        )
      }}
    />
  )
}

const headerQuery = graphql`
  query headerQuery {
    heroImage: file(relativePath: { eq: "hero-forest.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const LanguageBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${rhythm(1)};
`

export default Header
