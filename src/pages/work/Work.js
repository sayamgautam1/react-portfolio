import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";
import IntroRow from "../about/IntroRow";
import Square from "../../components/square/Square";
import Footer from "../../components/footer/Footer";

const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 2000px;
  margin: 0 auto;
  // overflow: hidden;
  @media (min-width: 900px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Content = styled.div`
  margin: 30px;
  display: flex;
  width: calc(100% - 90px);
  flex: 1 0 auto;
  flex-wrap: wrap;
  position: relative;
  background-color: #f6f6f6;
  // overflow: scroll;
`;

const AboutLanding = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: 100%;
  flex-wrap: wrap;
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

const Work = () => {
  return (
    <Layout>
      <Content>
        <AboutLanding>
          <SquareHeader>
            <SquareTitle>
              <p>
                WO
                <br />
                RK<span>.</span>
              </p>
            </SquareTitle>
          </SquareHeader>
          <IntroRow />
        </AboutLanding>
        <Hamburger />
        <Footer />
      </Content>
    </Layout>
  );
};
export default Work;
