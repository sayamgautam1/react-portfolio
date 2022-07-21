import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";
import Square from "../../components/square/Square";
import IntroRow from "./IntroRow";
import TimelineRow from "./TimelineRow";
import SkillsGrid from "./SkillsGrid";
import Footer from "../../components/footer/Footer";

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

const About = () => {
  return (
    <Layout>
      <Content>
        <Square />
        <IntroRow />
        <RowSpacer />
        <TimelineRow />
        <RowSpacer />
        <SkillsGrid />
        <Hamburger />
        <Footer />
      </Content>
    </Layout>
  );
};

export default About;
