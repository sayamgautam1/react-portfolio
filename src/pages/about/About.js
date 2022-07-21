import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";
import Me from "./Me.png";
import Square from "../../components/square/Square";
import IntroRow from "./IntroRow";

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

const LeftTriad = styled.div`
  flex: 30%;
`;

const CenterTriad = styled.div`
  flex: 30%;
`;
const RightTriad = styled.div`
  flex: 30%;
`;

const TimelineText = styled.div`
  h2 {
    max-width: 250px;
    margin: 30px auto;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
  }
  p {
    max-width: 250px;
    margin: 10px auto;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    margin-bottom: 30px;
    color: #5e5e5e;
    letter-spacing: 0.03em;
  }
`;

const Timeline = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  position: relative;
  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: orange;
    position: absolute;
    top: -5px;
    left: calc(50% - 125px);
  }
`;

const About = () => {
  return (
    <Layout>
      <Content>
        <Square />
        <IntroRow />
        <RowSpacer />

        <LeftTriad>
          <Timeline />
          <TimelineText>
            <h2>
              Growing <br />
              Passion.
            </h2>
            <p>
              Integer non elementum sem, vel convallis erat. Integer non
              elementum sem, vel convallis erat.
            </p>
          </TimelineText>
        </LeftTriad>
        <CenterTriad>
          <Timeline />
          <TimelineText>
            <h2>
              Expanding <br />
              Knowledge.
            </h2>
            <p>
              Integer non elementum sem, vel convallis erat. Integer non
              elementum sem, vel convallis erat.
            </p>
          </TimelineText>
        </CenterTriad>
        <RightTriad>
          <Timeline />
          <TimelineText>
            <h2>
              Gaining <br />
              Experience.
            </h2>
            <p>
              Integer non elementum sem, vel convallis erat. Integer non
              elementum sem, vel convallis erat.
            </p>
          </TimelineText>
        </RightTriad>

        <RowSpacer />
        <Hamburger />
      </Content>
    </Layout>
  );
};

export default About;
