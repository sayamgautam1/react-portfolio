import React from "react";
import styled from "styled-components";

const Row = styled.div`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 900px) {
  }
`;

const Left = styled.div`
  flex: 100%;
  @media (min-width: 900px) {
    flex: 55%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const HeaderText = styled.div`
  flex: 100%;
  padding: 20px;
  @media (min-width: 900px) {
    padding: 0;
    width: 50%;
    min-width: 200px;
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 20%;
    background-position: center center;
  }
  h1 {
    font-family: "Lato", sans-serif;
    font-size: 42px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
  }
  p {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    margin-bottom: 30px;
    color: #5e5e5e;
    letter-spacing: 0.03em;
  }
`;

const Right = styled.div`
  flex: 100%;
  padding: 20px;
  @media (min-width: 900px) {
    flex: 45%;
    height: auto;
    display: flex;
    position: relative;
  }
`;

// const RightImage = styled.div`
//   background-position: center center;
//   width: 100%;
//   height: 50vh;
//   max-height: 800px;
//   min-height: 500px;
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-image: url(${Me});
//   @media (min-width: 900px) {
//     width: 100%;
//     height: 50vh;
//     max-height: 800px;
//     min-height: 500px;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center right;
//     background-image: url(${Me});
//   }
// `;

const IntroRowWork = () => {
  return (
    <Row>
      <Left>
        <HeaderText>
          <h1>What I've been working on ?</h1>
        </HeaderText>
      </Left>
      <Right>
        <p>
          I like to stay busy and always have a project in the works. Take a
          look at some of the projects I've dedicated my time to.
        </p>
      </Right>
    </Row>
  );
};

export default IntroRowWork;
