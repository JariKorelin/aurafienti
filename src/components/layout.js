import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children, locale } = this.props

    const header = (
      <>
        <LanguageBar>
          <Link
            to="/"
            style={{
              margin: `0 ${rhythm(3 / 4)}`,
            }}
            // activeStyle={{ boxShadow: "none" }}
          >
            <p style={{ marginBottom: "0" }}>In English</p>
          </Link>
          <Link
            to="/fi"
            style={{
              margin: `0 ${rhythm(0.1)}`,
            }}
            // activeStyle={{ boxShadow: "none" }}
            // partiallyActive={true}
          >
            <p style={{ marginBottom: "0" }}>Suomeksi</p>
          </Link>
        </LanguageBar>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={locale === "en" ? "/" : "/fi"}
          >
            {title}
          </Link>
        </h1>
      </>
    )
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
        </div>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

const LanguageBar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${rhythm(1)};
`

export default Layout
