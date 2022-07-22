import styled from "styled-components";

const DarkGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: #1c202e;
  padding: 30px 0;
  @media (min-width: 900px) {
    flex-wrap: nowrap;
  }
`;

const LeftSkills = styled.div`
  flex: 100%;
  padding: 0;
  @media (min-width: 900px) {
    flex: 40%;
    padding: 0px;
  }
`;
const RightSkills = styled.div`
  flex: 100%;
  padding: 0;
  @media (min-width: 900px) {
    flex: 30%;
    padding: 0px;
  }
`;

const SkillDescription = styled.div`
  width: 100%;
  color: white;
  padding: 30px 20px;
  @media (min-width: 900px) {
    padding: 30px 20%;
  }
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
const SkillsGrid = () => {
  return (
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
  );
};

export default SkillsGrid;
