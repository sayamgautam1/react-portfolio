import styled from "styled-components";
import { breakpoints } from "../../Media";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import TechBlogThumb from "./techblog.png";
import WeatherAppThumb from "./weatherapp.png";
import Button from "../../components/button/Button";

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
      background-image: url(${TechBlogThumb});
      background-size: cover;
      background-position-x: center;
      background-position-y: center;
    }
  }
  :nth-child(2) {
    ${ProjectImage} {
      background-image: url(${WeatherAppThumb});
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

const SecondRowWork = () => {
  return (
    <ProjectContainer>
      <Project>
        <a href="https://peaceful-lake-94344.herokuapp.com/" target={"_blank"}>
          <ProjectImage />
        </a>
        <a href="https://peaceful-lake-94344.herokuapp.com/" target={"_blank"}>
          <SubHeading>Tech Blog</SubHeading>
        </a>
        <ProjectParagraph>
          A CMS-style blog site similar to a WordPress site, where developers
          can publish their blog posts and comment on other developers’ posts as
          well.
        </ProjectParagraph>
        <a href="https://github.com/sayamgautam1/Tech-Blog" target={"_blank"}>
          <ProjectLink>
            Vist Github <span>&#8250;</span>
          </ProjectLink>
        </a>
      </Project>
      <Project>
        <a
          href="https://sayamgautam1.github.io/weather-dashboard/"
          target={"_blank"}
        >
          <ProjectImage />
        </a>
        <a
          href="https://sayamgautam1.github.io/weather-dashboard/"
          target={"_blank"}
        >
          <SubHeading>Weather Dashboard</SubHeading>
        </a>
        <ProjectParagraph>
          Client-side weather search site by city leveraging OpenWeather API for
          current conditions and 5-day forecast.
        </ProjectParagraph>
        <a
          href="https://github.com/sayamgautam1/weather-dashboard"
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

export default SecondRowWork;
