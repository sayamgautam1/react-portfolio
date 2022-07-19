import React from "react";
import styled from "styled-components";
import hamburger from "../images/hamburger.svg";

const HamburgerImg = styled.img`
  position: absolute;
  right: 100px;
  top: 100px;
`;
const Hamburger = () => {
  return (
    <>
      <HamburgerImg src={hamburger} />
    </>
  );
};

export default Hamburger;
