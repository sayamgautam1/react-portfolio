import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";

const GridContainer = styled.div`
  .cursor {
    position: fixed;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
    pointer-events: none;
  }
  .Mouse .cursor:nth-child(2) {
    border: 1px solid gray;
    z-index: 100002;
  }
  .Mouse .cursor:nth-child(1) {
    background-color: black;
    opacity: 0.8;
    z-index: 100001;
    height: 20px;
    width: 20px;
  }
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 60px 1fr 1fr 1fr 1fr 1fr 1fr 1fr 60px;
  grid-template-rows: 60px 1fr 1fr 1fr 1fr 60px;
  grid-template-areas: ". . .  .  .  .  .  .  . " ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." ". Content Content Content Content Content Content Content ." "Footer Footer Footer Footer Footer Footer Footer Footer Footer";
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight" "Triangle Triangle Triangle ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight ContentRight";
  grid-area: Content;
  &::after {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
// const Cutout = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 0;
//   border-top: 1000px solid white;
//   border-right: 500px solid transparent;
//   animation: ShiftEdge 1s forwards;
//   @keyframes ShiftEdge {
//     0% {
//       border-top: 2400px solid white;
//       border-right: 300px solid transparent;
//     }
//     100% {
//       border-top: 1000px solid white;
//       border-right: 500px solid transparent;
//     }
//   }
// `;
const BlueBackground = styled.div`
  animation: slideFromRight 1s forwards;
  background-color: #ecf3f4;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas: ". . . . . . . . . Ham" ". . . . . . . . . ." ". . Description Description Description Description Description Description . ." ". . Description Description Description Description Description Description . ." ". . Description Description Description Description Description Description . ." ". . . . . . . . . ." ". . . . . . . . . .";
  grid-area: ContentRight;
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
`;

const SAYAM = styled.div`
  grid-area: Triangle;
  position: relative;
  margin-left: 11vw;
  margin-top: 25vh;
  font-size: 220px;
  line-height: 86.95%;
  letter-spacing: -0.03em;
  animation: slideFromLeft 1s forwards;
  animation-delay: 0.5s;
  pointer-events: none;
  opacity: 0;
  z-index: 99;
  font-weight: 900;
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
  width: 0;
  height: 0;
  position: absolute;
  right: 0;
  top: 0;
  border-bottom: 1000px solid #ecf3f4;
  border-left: 400px solid transparent;
`;
const Description = styled.div`
  grid-area: Description;
  padding: 15% 10%;
  h1 {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 40px;
    line-height: 91.45%;
  }
  p {
    margin-top: 30px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    color: #5e5e5e;
    width: 500px;
    letter-spacing: 0.03em;
  }
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
          <Description>
            <h1>Aspirant Full-Stack Developer</h1>
            <p>
              I’m a student at <strong>Adelaide University</strong>, a digital
              minimalist, below average football fan, a quick learner &
              passionate about technology.{" "}
              <strong>
                Feuled by black coffee and a drive to be better than I was
                yesterday.
              </strong>
            </p>
          </Description>
          <Hamburger />
        </BlueBackground>
      </Content>
    </GridContainer>
  );
};

export default Landing;
