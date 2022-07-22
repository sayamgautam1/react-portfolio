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

const ProjectRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 70px;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const Project = styled.div`
  width: 100%;
  height: 450px;
  :nth-child(1) {
    margin-right: 0;
    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 10%;
    }
  }
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
  }
`;
const SubContainer = styled.div`
  margin: 0px 0;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

const TextContent = styled.div`
  max-width: 700px;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: #f5f5f5;
  border-radius: 4px;
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
`;

const SubParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 60%;
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

          <Container>
            <SubContainer>
              <TextContent>
                <Heading>My Projects</Heading>
                <Paragraph>
                  I spend lots of my free exploring new technologies and picking
                  up new development projects. <br />
                  <br />
                  Take a look at what I've been working on recently.
                </Paragraph>
              </TextContent>
            </SubContainer>
            <SubContainer>
              <ProjectRow>
                <Project>
                  <ProjectImage />
                  <SubHeading>Forecast</SubHeading>
                  <SubParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ac pretium magna.
                  </SubParagraph>
                </Project>
                <Project>
                  <ProjectImage />
                  <SubHeading>Forecast</SubHeading>
                  <SubParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ac pretium magna.
                  </SubParagraph>
                </Project>
              </ProjectRow>
            </SubContainer>
            <SubContainer>
              <ProjectRow>
                <Project>
                  <ProjectImage />
                  <SubHeading>Forecast</SubHeading>
                  <SubParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ac pretium magna.
                  </SubParagraph>
                </Project>
                <Project>
                  <ProjectImage />
                  <SubHeading>Forecast</SubHeading>
                  <SubParagraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis ac pretium magna.
                  </SubParagraph>
                </Project>
              </ProjectRow>
            </SubContainer>
          </Container>
        </WorkLanding>
        <Hamburger />
      </Content>
    </Layout>
  );
};
export default Work;
