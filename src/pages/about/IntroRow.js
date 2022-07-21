import React from "react";
import styled from "styled-components";
import Me from "./Me.png";

const Row = styled.div`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 55%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

const HeaderText = styled.div`
  padding: 0;
  width: 50%;
  min-width: 200px;
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  background-position: center center;
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
  flex: 45%;
  height: auto;
  display: flex;
  position: relative;
`;

const RightImage = styled.div`
  width: 100%;
  height: 50vh;
  max-height: 800px;
  min-height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  background-image: url(${Me});
`;

const IntroRow = () => {
  return (
    <Row>
      <Left>
        <HeaderText>
          <h1>
            Building More Than <br />
            Just Websites
          </h1>
          <p>
            Duis sit amet mauris in tortor facilisis ornare eleifend vel quam.
            Aliquam erat volutpat. Integer non elementum sem, vel convallis
            erat.
          </p>
          <p>
            Duis sit amet mauris in tortor facilisis ornare eleifend vel quam.
            Aliquam erat volutpat. Integer non elementum sem, vel convallis
            erat.
          </p>
          <p>
            Duis sit amet mauris in tortor facilisis ornare eleifend vel quam.
            Aliquam erat volutpat. Integer non elementum sem, vel convallis
            erat.
          </p>
        </HeaderText>
      </Left>
      <Right>
        <RightImage />
      </Right>
    </Row>
  );
};

export default IntroRow;
