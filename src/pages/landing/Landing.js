import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";
import DescriptionHome from "../../components/descriptionHome/DescriptionHome";

const GridContainer = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 60px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 60px;
  grid-template-rows: 60px 1fr 1fr 1fr 1fr 60px;
  grid-template-areas: ". . .  .  .  .  .  .  . " ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." "Footer Footer Footer Footer Footer Footer Footer Footer Footer";
`;

const Content = styled.div`
  height: 100%;
  display: grid;
  grid-area: Content;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight";
  overflow: hidden;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const BlueBackground = styled.div`
  height: 100%;
  background-color: #ecf3f4;
  position: relative;
  z-index: 1;
  display: grid;
  grid-area: ContentRight;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . . . . . . . . Ham" ". . . . . . . . . ." ". . Description Description Description Description Description Description . ." ". . Description Description Description Description Description Description . ." ". . Description Description Description Description Description Description . ." ". . . . . . . . . ." ". . . . . . . . . .";
  animation: slideFromRight 1s forwards;
`;

const SAYAM = styled.div`
  grid-area: Triangle;
  position: absolute;
  margin-top: 25vh;
  right: 0;
  z-index: 5;
  opacity: 0;
  font-size: 220px;
  line-height: 86.95%;
  letter-spacing: -0.03em;
  pointer-events: none;
  font-weight: 900;
  animation: slideFromLeft 1s forwards;
  animation-delay: 0.5s;
  @keyframes slideFromLeft {
    0% {
      transform: translate(-1000px);
      opacity: 0;
    }
    100% {
      transform: translate(0px);
      opacity: 1;
    }
  }
`;
const Triangle = styled.div`
  animation: slideFromRight 1s forwards;
  grid-area: Triangle;
  position: relative;
  height: 100%;
  z-index: 2;
  @keyframes slideFromRight {
    0% {
      transform: translate(2000px);
      opacity: 0;
    }
    100% {
      transform: translate(0);
      opacity: 1;
    }
  }
  z-index: 1;
`;
const BlueTriangle = styled.div`
  height: 100%;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  border-bottom: 100vh solid #ecf3f4;
  border-left: 400px solid transparent;
`;

const Landing = () => {
  return (
    <GridContainer>
      <Content>
        <Triangle>
          <BlueTriangle />
          <SAYAM>
            SA <br />
            YAM
          </SAYAM>
        </Triangle>
        <BlueBackground>
          <DescriptionHome />
          <Hamburger />
        </BlueBackground>
      </Content>
    </GridContainer>
  );
};

export default Landing;
