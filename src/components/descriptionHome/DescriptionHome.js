import React from "react";
import styled from "styled-components/macro";

const Description = styled.div`
  padding: 100px 20px;
  width: 100%;
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-position: center center;
  h1 {
    text-align: center;
    @media (min-width: 900px) {
      text-align: left;
      width: 100%;
      font-family: "Lato", sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 40px;
    }
  }
  p {
    text-align: center;
    margin: 30px auto;
    width: 100%;
    max-width: 500px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    color: #5e5e5e;
    letter-spacing: 0.03em;
    @media (min-width: 900px) {
      text-align: left;
      margin: 30px 0;
    }
  }
`;
const DescriptionHome = () => {
  return (
    <Description>
      <h1>Aspirant Full-Stack Developer</h1>
      <p>
        I’m a student at <strong>Adelaide University</strong>, a digital
        minimalist, below average football fan, a quick learner & passionate
        about technology.{" "}
        <strong>
          Feuled by black coffee and a drive to be better than I was yesterday.
        </strong>
      </p>
    </Description>
  );
};

export default DescriptionHome;
