import styled from "styled-components";
import { breakpoints } from "../../Media";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import MediaAppThumbnail from "./moviesearchapp.png";
import MyButcher from "./mybutcher.png";

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  flex-wrap: wrap;
  margin-top: 0px;
  height: unset;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 70px;
    margin-top: 40px;
    height: 500px;
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
  transition: border-bottom 0.3s;
  :hover {
    border-bottom: 2px solid black;
  }
  span {
    font-size: 20px;
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  transition-duration: 0.3s;
`;

const Project = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 90px;
  transition-duration: 0.3s;
  :hover {
    ${ProjectImage} {
      transform: scale(1.03);
    }
    ${ProjectLink} {
      border-bottom: 2px solid black;
    }
  }
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
      background-position-x: center;
      background-position-y: center;
    }
  }
  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${MyButcher});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }
`;

const SubHeading = styled(Heading)`
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 30px;
`;

const ProjectParagraph = styled(Paragraph)`
  margin-top: 10px;
  max-width: unset;
  margin-bottom: 20px;
  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 70%;
  }
`;

const ProjectRow = () => {
  return (
    <ProjectContainer>
      <Project>
        <a
          href="https://nolie88.github.io/appvengers-assemble/"
          target={"_blank"}
        >
          <ProjectImage />
        </a>
        <a
          href="https://nolie88.github.io/appvengers-assemble/"
          target={"_blank"}
        >
          <SubHeading>Media Search App</SubHeading>
        </a>
        <ProjectParagraph>
          A movie information and searching App using OMDB api and Youtube api.
        </ProjectParagraph>
        <a
          href="https://github.com/sayamgautam1/media-browser"
          target={"_blank"}
        >
          <ProjectLink>
            Vist Github <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
      <Project>
        <a
          href="https://ordering-system-team4.herokuapp.com/"
          target={"_blank"}
        >
          <ProjectImage />
        </a>
        <a
          href="https://ordering-system-team4.herokuapp.com/"
          target={"_blank"}
        >
          <SubHeading>E-commerce Meat Ordering App</SubHeading>
        </a>
        <ProjectParagraph>
          E-Commerce website, that allows you to make contracted orders from a
          local butcher shop, review past orders and generate invoice of all
          orders placed till date
        </ProjectParagraph>
        <a
          href="https://github.com/sayamgautam1/E-Commerce_website"
          target={"_blank"}
        >
          <ProjectLink>
            Vist Github <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
    </ProjectContainer>
  );
};

export default ProjectRow;
