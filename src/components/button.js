import React from "react"
import styled from "styled-components"

const Button = props => (
  <ButtonWrapper props={props}>{props.children}</ButtonWrapper>
)

const ButtonWrapper = styled.button`
  display: block;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: background, 0.25s;

  background: ${props =>
    props.props.secondary ? "white" : props.theme.mainColor};
  color: ${props =>
    props.props.secondary ? "rgba(0, 0, 0, 0.9)" : "rgb(255, 255, 255)"};
  font-size: ${props => (props.props.secondary ? "12px" : "15px")};
  font-weight: ${props => props.props.fontWeight || "600"};
  border-radius: ${props => props.props.radius || "6px"};
  border: ${props =>
    props.props.secondary ? "1px solid rgba(0,0,0,0.5)" : "none"};
  margin-top: ${props => props.props.marginTop};
  margin-bottom: ${props => props.props.marginBottom};
  margin-left: ${props => props.props.marginLeft};
  margin-right: ${props => props.props.marginRight};

  &:hover {
    background: ${props =>
      props.props.secondary ? "#f4f4f4" : props.theme.mainColorDark};
  }
`

export default Button
