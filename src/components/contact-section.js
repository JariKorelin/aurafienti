import React, { Component } from "react"
import styled from "styled-components"
import Button from "../components/button"
import { rhythm } from "../utils/typography"
import { SectionHeading } from "../utils/styledComponents"

class ContactSection extends Component {
  render() {
    const { content, locale } = this.props
    return (
      <Wrapper>
        <Container>
          {content.map(({ node }) => {
            if (node.frontmatter.locale !== locale) return false

            return (
              <Row key={node.id}>
                <Col>
                  <SectionHeading style={{ marginTop: rhythm(0.5) }}>
                    {node.frontmatter.sectionHeading}
                  </SectionHeading>
                  <div dangerouslySetInnerHTML={{ __html: node.html }} />
                </Col>
                <Col>
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    style={{ marginBottom: 0 }}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p>
                      <label>
                        {locale === "en" ? "Name" : "Nimi"}:
                        <input
                          style={{ width: "100%" }}
                          type="text"
                          name="name"
                        />
                      </label>
                    </p>
                    <p>
                      <label>
                        {locale === "en" ? "E-mail" : "Sähköposti"}:{" "}
                        <input
                          style={{ width: "100%" }}
                          type="email"
                          name="email"
                        />
                      </label>
                    </p>
                    <p>
                      <label>
                        {locale === "en" ? "Message" : "Viesti"}:{" "}
                        <textarea style={{ width: "100%" }} name="message" />
                      </label>
                    </p>
                    <Button secondary type="submit">
                      {locale === "en" ? "Send" : "Lähetä"}
                    </Button>
                  </form>
                </Col>
              </Row>
            )
          })}
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div``

const Container = styled.section`
  display: flex;
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

  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
`

const Col = styled.div`
  &:last-child {
    @media screen and (min-width: 640px) {
      padding: ${rhythm(0.75)};
      margin-left: ${rhythm(1)};
      background-color: white;
      box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.15);
      border-radius: 0 50px 0 0;
      margin-top: ${rhythm(-2)};
    }
  }

  @media screen and (min-width: 640px) {
    width: calc(50% - ${rhythm(1)});
  }
`

export default ContactSection
