import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";
import Me from "./Me.png";

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
      color: orange;
    }
  }
`;

const Row = styled.div`
  width: 100%;
  margin-top: 50px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  flex: 55%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

const HeaderText = styled.div`
  padding: 0;
  width: 50%;
  min-width: 200px;
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  background-position: center center;
  h1 {
    font-family: "Lato", sans-serif;
    font-size: 42px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
    margin-bottom: 30px;
  }
  p {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 156.19%;
    margin-bottom: 30px;
    color: #5e5e5e;
    letter-spacing: 0.03em;
  }
`;

const Right = styled.div`
  flex: 45%;
  height: auto;
  display: flex;
  position: relative;
`;

const RightImage = styled.div`
  width: 100%;
  height: 50vh;
  max-height: 800px;
  min-height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
  background-image: url(${Me});
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
        <SquareHeader>
          <SquareTitle>
            <p>
              AB
              <br />
              OUT<span>.</span>
            </p>
          </SquareTitle>
        </SquareHeader>
        <Row>
          <Left>
            <HeaderText>
              <h1>
                Building More Than <br />
                Just Websites
              </h1>
              <p>
                Duis sit amet mauris in tortor facilisis ornare eleifend vel
                quam. Aliquam erat volutpat. Integer non elementum sem, vel
                convallis erat.
              </p>
              <p>
                Duis sit amet mauris in tortor facilisis ornare eleifend vel
                quam. Aliquam erat volutpat. Integer non elementum sem, vel
                convallis erat.
              </p>
              <p>
                Duis sit amet mauris in tortor facilisis ornare eleifend vel
                quam. Aliquam erat volutpat. Integer non elementum sem, vel
                convallis erat.
              </p>
            </HeaderText>
          </Left>
          <Right>
            <RightImage />
          </Right>
        </Row>
        <RowSpacer />
        <Row>
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
        </Row>
        <RowSpacer />
        <Hamburger />
      </Content>
    </Layout>
  );
};

export default About;
