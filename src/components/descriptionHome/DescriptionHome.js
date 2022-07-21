import React from "react";
import styled from "styled-components/macro";

const Description = styled.div`
  grid-area: Description;
  padding: 5.8vh 30px 0 30px;
  width: 100%;
  h1 {
    width: 100%;
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
  }
  p {
    margin-top: 30px;
    width: 100%;
    max-width: 500px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    color: #5e5e5e;
    letter-spacing: 0.03em;
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
