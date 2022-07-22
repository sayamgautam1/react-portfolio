import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import hamburger from "./hamburger.svg";
import hamburgerHover from "./hamburgerHover.svg";
import close from "./close.svg";
import { useState } from "react";
import { breakpoints } from "../../Media";

const HamburgerContainer = styled.div`
  position: fixed;
  right: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  z-index: 9999;
  @media (min-width: ${breakpoints.mobileMax}) {
    right: 20px;
    top: 20px;
    width: unset;
  } ;
`;
const HamburgerImg = styled.div`
  z-index: 99999;
  display: block;
  position: absolute;
  top: 30px;
  right: 60px;
  width: ${(props) => (props.on ? `40px` : `20px`)};
  height: 30px;
  display: block;
  background-image: ${(props) =>
    props.on ? `url(${hamburger})` : `url(${close})`};
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 1;
  transform: translate(40px);
  transition-duration: 0.2s;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
  @media (min-width: ${breakpoints.mobileMax}) {
    top: 40px;
    right: 80px;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover {
    background-image: ${(props) =>
      props.on ? `url(${hamburgerHover})` : `url(${close})`};
  }
`;

const NavContainer = styled.div`
  height: 100%;
  z-index: 999;
  width: 100%;
  padding-left: 30px;
  background-color: white;
  position: ${(props) => (props.on ? "fixed" : "absolute")};
  display: block;
  right: 0;
  top: 0;
  opacity: 0;
  animation: ${(props) =>
    props.on ? "SlideOutRight .7s forwards" : "SlideFromLeft .5s forwards"};
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 500px;
    right: 0;
    top: 0;
    padding-left: 80px;
  }
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

const Links = styled.div`
  margin-top: 100px;
  width: auto;
  height: 40%;
  & > a {
    width: 200px;
    display: block;
    color: black;
    text-decoration: none;
    font-weight: 800;
    font-size: 45px;
    margin: 5% 0 0 0;
    line-height: 91.45%;
    position: relative;
    z-index: 2;
    opacity: 0;
    animation: ${(props) => (props.on ? "none" : "SlideInText .7s forwards")};
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    @keyframes SlideInText {
      0% {
        transform: translate(100px);
        opacity: 0;
      }
      100% {
        transform: translate(0);
        opacity: 1;
      }
    }
    &::after {
      width: 0px;
      left: -10px;
      content: "";
      display: inline-block;
      height: 20px;
      position: absolute;
      bottom: 0px;
      z-index: -2;
      transition: width 0.4s;
    }
    &:hover::after {
      width: 150px;
      background-color: #ecf3f4;
    }
    &:nth-child(2):hover::after {
      width: 150px;
      background-color: #ffc7a2;
    }
    &:nth-child(3):hover::after {
      width: 145px;
      background-color: #b5f6ff;
    }
    &:nth-child(4):hover::after {
      width: 190px;
    }
  }
`;

const Hamburger = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <HamburgerContainer>
        <HamburgerImg on={toggle} onClick={() => setToggle(!toggle)} />

        <NavContainer on={toggle}>
          <Links on={toggle}>
            <Link to="/">Home.</Link>
            <Link to="/about">About.</Link>
            <Link to="/work">Work.</Link>
            <Link to="/about">Contact.</Link>
          </Links>
        </NavContainer>
      </HamburgerContainer>
    </>
  );
};

export default Hamburger;
// #ecf3f4;
