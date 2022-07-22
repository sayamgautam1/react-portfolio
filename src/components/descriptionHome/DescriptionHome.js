import React from "react";
import styled from "styled-components/macro";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const Description = styled.div`
  padding: 100px 20px;
  width: 100%;
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-position: center center;
`;
const DescriptionHome = () => {
  return (
    <Description>
      <Heading>Aspirant Full-Stack Developer</Heading>
      <Paragraph>
        I’m a student at <strong>Adelaide University</strong>, a digital
        minimalist, below average football fan, a quick learner & passionate
        about technology.{" "}
        <strong>
          Feuled by black coffee and a drive to be better than I was yesterday.
        </strong>
      </Paragraph>
    </Description>
  );
};

export default DescriptionHome;
