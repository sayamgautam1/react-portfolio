import styled from "styled-components";
import { breakpoints } from "../../Media";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import MediaAppThumbnail from "./moviesearchapp.png";

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  flex-wrap: wrap;
  margin-top: 0px;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 70px;
    margin-top: 40px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  background-color: gray;
  border-radius: 4px;
`;

const Project = styled.div`
  width: 100%;
  height: 450px;
  margin-bottom: 90px;
  :nth-child(1) {
    margin-right: 0;
    @media (min-width: ${breakpoints.mobileMax}) {
      margin-right: 10%;
    }
  }
  @media (min-width: ${breakpoints.mobileMax}) {
    width: 45%;
    margin-bottom: 0px;
  }
  :nth-child(1) {
    ${ProjectImage} {
      background-image: url(${MediaAppThumbnail});
      background-size: cover;
    }
  }
  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${MediaAppThumbnail});
      background-size: cover;
    }
  }
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
`;

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;
  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 60%;
  }
`;

const ProjectLink = styled(Paragraph)`
  font-weight: 700;
  font-size: 14px;
  line-height: 163.19%;
  display: inline;
  color: black;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;
  :hover {
    border-bottom: 2px solid black;
  }
  span {
    font-size: 20px;
  }
`;

const ProjectRow = () => {
  return (
    <ProjectContainer>
      <Project>
        <a href="#" target={"_blank"}>
          <ProjectImage />
        </a>
        <a href="#" target={"_blank"}>
          <SubHeading>Forecast</SubHeading>
        </a>
        <ProjectParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          pretium magna.
        </ProjectParagraph>
        <a href="#" target={"_blank"}>
          <ProjectLink>
            Vist Site <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
      <Project>
        <a href="#">
          <ProjectImage />
        </a>
        <a href="#">
          <SubHeading>Forecast</SubHeading>
        </a>
        <ProjectParagraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac
          pretium magna.
        </ProjectParagraph>
        <a href="#">
          <ProjectLink>
            Vist Site <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
    </ProjectContainer>
  );
};

export default ProjectRow;
