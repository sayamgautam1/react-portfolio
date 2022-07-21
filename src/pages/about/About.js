import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";
import Square from "../../components/square/Square";
import IntroRow from "./IntroRow";
import TimelineRow from "./TimelineRow";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 60px;
`;

const Content = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  background-color: #f7f7f7;
  height: 100%;
  position: relative;
`;

const RowSpacer = styled.div`
  width: 100%;
  padding: 80px 0;
`;

const DarkGrid = styled.div`
  width: 100%;
  display: flex;
  background-color: #1c202e;
`;

const LeftSkills = styled.div`
  flex: 40%;
  padding: 40px;
`;
const RightSkills = styled.div`
  flex: 30%;
  padding: 40px;
`;

const SkillDescription = styled.div`
  width: 100%;
  color: white;
  padding: 30px 20%;
  h3 {
    max-width: 250px;
    margin: 30px 0;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
  }
  p {
    color: #dcdcdc;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 156.19%;
    margin-bottom: 10px;
    letter-spacing: 0.03em;
  }
`;

const About = () => {
  return (
    <Layout>
      <Content>
        <Square />
        <IntroRow />
        <RowSpacer />
        <RowSpacer />
        <TimelineRow />
        <RowSpacer />
        <DarkGrid>
          <LeftSkills>
            <SkillDescription>
              <h3>My Skills.</h3>
              <p>
                I also make a good cup of coffee, but I doubt that’s what you’re
                here to figure out.
              </p>
            </SkillDescription>
          </LeftSkills>
          <RightSkills>
            <SkillDescription>
              <h3>Front-End</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>React</p>
            </SkillDescription>
          </RightSkills>
          <RightSkills>
            <SkillDescription>
              <h3>Back-End</h3>
              <p>NodeJS</p>
              <p>ExpressJS</p>
              <p>GraphQL</p>
              <p>MongoDb and SQL</p>
            </SkillDescription>
          </RightSkills>
        </DarkGrid>
        <Hamburger />
      </Content>
    </Layout>
  );
};

export default About;
