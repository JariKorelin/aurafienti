import React from "react"
import styled from "styled-components"
import Button from "../components/button"
import { rhythm } from "../utils/typography"
import { SectionHeading } from "../utils/styledComponents"

function ContactSection({ content, locale }) {
  return (
    <Wrapper>
      <Container>
        {content.map(({ node }) => {
          if (node.frontmatter.locale !== locale) return false

          return (
            <Row key={node.id}>
              <Col>
                <SectionHeading style={{ marginTop: rhythm(1) }}>
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
                  <p>
                    <label>
                      Name: <input type="text" name="name" />
                    </label>
                  </p>
                  <p>
                    <label>
                      E-mail: <input type="email" name="email" />
                    </label>
                  </p>
                  <p>
                    <label>
                      Message: <textarea name="message"></textarea>
                    </label>
                  </p>
                  <Button type="submit">Send</Button>
                </form>
              </Col>
            </Row>
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

const Row = styled.div`
  display: flex;
  align-items: flex-start;
`

const Col = styled.div`
  &:last-child {
    padding: ${rhythm(0.75)};
    margin-top: ${rhythm(-2)};
    margin-left: ${rhythm(1)};
    background-color: white;
    box-shadow: 0 30px 50px -20px rgba(0, 0, 0, 0.15);
    border-radius: 0 50px 0 0;
  }
`

export default ContactSection
