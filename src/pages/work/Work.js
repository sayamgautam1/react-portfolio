import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";

import { breakpoints } from "../../Media";
import { Container } from "../../components/container/Container";
import Paragraph from "../../components/Paragraph";
import Heading from "../../components/Heading";
import Button from "../../components/button/Button";
const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  overflow: hidden;
  max-width: 2000px;
  margin: 0 auto;
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 100vw;
    height: 100vh;
  }
`;

const Content = styled.div`
  margin: 10px;
  display: flex;
  width: calc(100% - 90px);
  flex: 1 0 auto;
  flex-wrap: wrap;
  position: relative;
  overflow: scroll;
  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 30px;
  }
`;

const WorkLanding = styled.div`
  height: calc(100vh - 20px);
  background-color: #ecf3f4;
  width: 100%;
  @media (min-width: ${breakpoints.mobileMax}) {
    display: flex;
    flex: 1 0 auto;
    background-color: #ecf3f4;
    height: 100%;
    flex-wrap: wrap;
  }
`;

const RowSpacer = styled.div`
  width: 100%;
  padding: 80px 0;
`;

const SquareHeader = styled.div`
  width: 100%;
  max-height: 300px;
  height: 30%;
  position: relative;
`;

const SquareTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 30px 30px 5px;
  background-color: white;
  p {
    margin: 0;
    padding: 0;
    font-weight: 800;
    font-size: 150px;
    line-height: 81.45%;
    letter-spacing: -0.045em;
    span {
      color: #b5f6ff;
    }
  }
`;

const ProjectDescription = styled(Container)`
  width: 100%;
  height: 100%;
  height: auto;
  vertical-align: middle;
  margin-left: 20px;
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 40%;
    margin-left: 5%;
  }
`;

const ProjectDiv = styled(Container)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 30%;
    height: 800px;
    display: block;
    margin: 100px;
  }
`;

const Project = styled(Container)`
  width: 100%;
  height: 400px;
  padding: 0;
  margin: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #d3d3d3;
  transition: box-shadow 0.2s;
  /* background-image: url("https://s3-alpha-sig.figma.com/img/0f29/4ab3/d756d27ec4094f94acb28e642e628864?Expires=1563753600&Signature=JYk6w9M-Jj4Er-y8IuSG-FEiZUTuj9M~QP7b4wMho1fT3~ElNEBmAMNTo-N1jvOAye~RuJDBXVSqvqxv06B0ffJIIQPA3IcZ~sLtgipNokLkvWR4XhTOsc-mcbzrsExUkK~ERKBUiA0a4uO80vJpWIyygk~GyQLkamxvS4cp36rXe1K97nG6LzhMSgcFG86PQTr6EGk6ZqllqdIoqkOHdDPKVnMIiVcZO7XCOGOGU8SpVnP8FR7ZCxC-6KERGw2x4naITmG3uI5Is9EI1Js4Q~SHDSjepUJr9bnyNgJyhPHbAdTV-FI74dvWBAVsTS2KYPCeBbr9szlP~dFcXoNKNg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"); */
  @media (min-width: ${breakpoints.mobileMax}) {
    margin: 0 20px 20px 40px;
    width: 400px;
    height: 33%;
  }
  ::after {
    content: "+";
    opacity: 0;
    transform: translateY(20px);
    transition: 0.2s;
    font-size: 20px;
    content: "+";
    padding: 20px 30px;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: white;
  }
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    ::after {
      transform: translateY(0);
      opacity: 1;
    }
  }
  :nth-child(1) {
    transform: translateX(0px);
    @media (min-width: ${breakpoints.mobileMax}) {
      transform: translateX(0px);
    }
  }
  :nth-child(2) {
    transform: translateX(0px);
    @media (min-width: ${breakpoints.mobileMax}) {
      transform: translateX(-100px);
    }
  }
  :nth-child(3) {
    transform: translateX(0px);
    @media (min-width: ${breakpoints.mobileMax}) {
      transform: translateX(-200px);
    }
  }
`;
const Work = () => {
  return (
    <Layout>
      <Content>
        <WorkLanding>
          <SquareHeader>
            <SquareTitle>
              <p>
                WO
                <br />
                RK<span>.</span>
              </p>
            </SquareTitle>
          </SquareHeader>
          <ProjectDescription>
            <Heading>My Projects</Heading>
            <Paragraph>
              I spend lots of my free exploring new technologies and picking up
              new development projects. <br />
              <br />
              Take a look at what I've been working on recently.
            </Paragraph>
            <Button>See My Work</Button>
          </ProjectDescription>
          <ProjectDiv>
            <Project />
            <Project />
            <Project />
          </ProjectDiv>
        </WorkLanding>
        <Hamburger />
      </Content>
    </Layout>
  );
};
export default Work;
