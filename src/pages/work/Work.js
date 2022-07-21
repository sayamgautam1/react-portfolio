import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 60px;
`;

const Content = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  background-color: #f7f7f7;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
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
const Work = () => {
  return (
    <Layout>
      <Content>
        <SquareTitle>
          <p>
            WO
            <br />
            RK <span>.</span>
          </p>
        </SquareTitle>
        <Hamburger />
      </Content>
    </Layout>
  );
};
export default Work;
