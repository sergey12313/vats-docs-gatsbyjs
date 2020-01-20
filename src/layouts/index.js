/** @jsx jsx */
import React, { useState } from "react"
import { jsx, css } from "@emotion/core"
import styled from "@emotion/styled"
import { useMediaQuery } from "react-responsive"
import { Navigation } from "../components/Navigation"
import { menu } from "../summary"

const bp = "600px"
const menuWidth = "300px"

const MainConteiner = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  height: 100vh;
`
const NavigationContainer = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  width: calc(100% - 60px);
  z-index: 1;
  left: ${props => (props.flag ? "0" : "-100%")};
  z-index: 1;
  overflow-y: auto;
  transition: left 250ms ease;
  border-right: 1px solid rgba(0, 0, 0, 0.07);
  background-color: #fafafa;
  @media (min-width: ${bp}) {
    width: ${menuWidth};
  }
`
const ContentContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow-y: auto;
  padding: 0;
  background-color: #fff;
  transform: ${props =>
    props.flag ? "translate(calc(100% - 60px), 0)" : null};
  transition: transform 250ms ease;
  @media (min-width: ${bp}) {
    transform: ${props =>
      props.flag ? `translate(${menuWidth}, 0)` : "translate(0, 0)"};
    width: ${props => (props.flag ? `calc(100% - ${menuWidth})` : "auto")};
  }
`
const BurgerButton = styled.button`
  padding: 10px;
  background-color: transparent;
  border: none;
  & svg {
    fill: #ccc;
  }
  cursor: pointer;
  &:hover  svg {
    fill: #444;
  }
`

const Content = styled.div`
  padding: 10px 20px;
`
const ContentHeader = styled.div`
  margin: 5px;
`

const BurgerIcon = () => {
  return (
    <svg id="icon-burger" width="15px" height="15px" viewBox="0 0 24 24">
      <rect y="2" width="24" height="2" rx="1"></rect>
      <rect y="20" width="24" height="2" rx="1"></rect>
      <rect y="8" width="24" height="2" rx="1"></rect>
      <rect y="14" width="24" height="2" rx="1"></rect>
    </svg>
  )
}

export default ({ children }) => {
  const [flag, setFlag] = useState(true)
  const isBigScreen = useMediaQuery({ minWidth: bp })
  const close = ({ target }) => {
    if (!isBigScreen) {
      setFlag(false)
    }
  }
  return (
    <MainConteiner>
      <NavigationContainer flag={flag} isBigScreen={isBigScreen}>
        <Navigation items={menu} onClick={event => close(event)} />
      </NavigationContainer>
      <ContentContainer flag={flag} isBigScreen={isBigScreen}>
        <ContentHeader>
          <BurgerButton onClick={() => setFlag(!flag)}>
            <BurgerIcon />
          </BurgerButton>
        </ContentHeader>
        <Content>{children}</Content>
      </ContentContainer>
    </MainConteiner>
  )
}
