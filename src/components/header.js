import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Image from "gatsby-image"
import Button from "../components/button"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import logoImage from "../../content/assets/logo-aurafienti.svg"

const Header = ({ contactRef, locale }) => {
  const scrollToBottom = event => {
    event.preventDefault()
    contactRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <StaticQuery
      query={headerQuery}
      render={data => {
        return (
          <PageHeader>
            <HeroImage fluid={data.heroImage.childImageSharp.fluid} />
            <HeaderLinks>
              <HeaderJumpLink onClick={scrollToBottom} href="#">
                {locale === "en" ? "Contact" : "Yhteystiedot"}
              </HeaderJumpLink>
              <LanguageLinks>
                <HeaderLink to="/">In English</HeaderLink>
                <HeaderLink to="/fi">Suomeksi</HeaderLink>
              </LanguageLinks>
            </HeaderLinks>
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
                  maxWidth: rhythm(22),
                  padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                }}
              >
                <img src={logoImage} alt="Aurafienti logo" />
              </div>
            </Link>
          </PageHeader>
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

const PageHeader = styled.header`
  position: relative;
  padding: ${rhythm(1)};
  min-height: 300px;
  max-height: 400px;
`

const HeaderLink = styled(props => <Link {...props} />)`
  color: white;
  margin: 0 ${rhythm(2 / 4)};
  // padding: ${rhythm(1 / 4)} ${rhythm(2 / 4)};
  // background: rgba(0, 0, 0, 0.33);
`

const HeaderJumpLink = styled(props => <HeaderLink {...props} />)`
  border: 0;
`

const HeroImage = styled(props => <Image {...props} />)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.01)
    );
  }
`

const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${rhythm(1)};
`

const LanguageLinks = styled.div``

export default Header
