import React from "react";
import styled from "styled-components";
import hamburger from "./images/hamburger.svg";
import close from "./images/close.svg";
import { useState } from "react";

const HamburgerContainer = styled.div`
  width: auto;
  height: auto;
  positon: absolute;
  right: 50px;
  top: 40px;
`;
const HamburgerImg = styled.div`
  animation: fadeIn 1s forwards;
  width: 30px;
  transition-duration: 0.2s;
  height: 30px;
  display: block;
  animation-delay: 1s;
  background-image: ${(props) =>
    props.on ? `url(${hamburger})` : `url(${close})`};
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: 99;
  opacity: 0;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const NavContainer = styled.div`
  height: 100vh;
  width: 500px;
  background-color: white;
  position: absolute;
  display: block;
  opacity: 0;
  transition: 0.3s;
  animation: ${(props) =>
    props.on ? "SlideOutRight .7s forwards" : "SlideFromLeft .5s forwards"};
  z-index: -2;
  right: 0;
  top: 0;
  @keyframes SlideFromLeft {
    0% {
      transform: translate(1000px);
      opacity: 0;
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
  @keyframes SlideOutRight {
    0% {
      transform: translate(0);
      opacity: 1;
    }
    100% {
      transform: translate(1000px);
      opacity: 0;
    }
  }
`;
const Hamburger = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <HamburgerContainer>
        <HamburgerImg on={toggle} onClick={() => setToggle(!toggle)} />
      </HamburgerContainer>
      <NavContainer on={toggle}>
        <h2>About</h2>
      </NavContainer>
    </>
  );
};

export default Hamburger;
