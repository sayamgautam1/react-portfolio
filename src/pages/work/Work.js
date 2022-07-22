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
  overflow: hidden;
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
  overflow: scroll;
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

const Work = () => {
  return (
    <Layout>
      <Content>
        <AboutLanding>
          <Square />
          <IntroRow />
        </AboutLanding>
        <Hamburger />
        <Footer />
      </Content>
    </Layout>
  );
};
export default Work;
