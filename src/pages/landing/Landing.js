import styled from "styled-components";
import Hamburger from "../../components/hamburger/Hamburger";
import DescriptionHome from "../../components/descriptionHome/DescriptionHome";

const Layout = styled.div`
  height: 100vh;
  padding: 20px;
  @media (min-width: 900px) {
    padding: 60px;
  }
`;

const Content = styled.div`
  max-width: 2000px;
  height: 100%;
  margin: 0 auto;
  background-color: #ecf3f4;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  flex: 1;
  position: relative;
`;

const Left = styled.div`
  flex: 100%;
  @media (min-width: 900px) {
    flex: 50%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const Right = styled.div`
  flex: 100%;
  @media (min-width: 900px) {
    flex: 50%;
    height: 100%;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
  }
`;

const SAYAM = styled.div`
  background-color: white;
  padding: 20px;
  width: 350px;
  p {
    margin: 0 auto;
    font-weight: 900;
    font-size: 200px;
    line-height: 86.95%;
    letter-spacing: -0.03em;
  }
  @media (min-width: 900px) {
    background-color: unset;
    padding: 0;
    width: 100%;
    flex: 1 0 auto;
    position: relative;
    display: flex;
    flex-direction: column;
    background-position: center center;
  }
`;
// const Triangle = styled.div`
//   animation: slideFromRight 1s forwards;
//   grid-area: Triangle;
//   position: relative;
//   height: 100%;
//   z-index: 2;
//   @keyframes slideFromRight {
//     0% {
//       transform: translate(2000px);
//       opacity: 0;
//     }
//     100% {
//       transform: translate(0);
//       opacity: 1;
//     }
//   }
//   z-index: 1;
// `;
// const BlueTriangle = styled.div`
//   height: 100%;
//   overflow: hidden;
//   position: absolute;
//   right: 0;
//   top: 0;
//   border-bottom: 100vh solid #ecf3f4;
//   border-left: 400px solid transparent;
// `;

const Landing = () => {
  return (
    <Layout>
      <Content>
        <Hamburger />
        <Left>
          <SAYAM>
            <p>
              SA <br />
              YAM
            </p>
          </SAYAM>
        </Left>
        <Right>
          <DescriptionHome />
        </Right>
      </Content>
    </Layout>
  );
};

export default Landing;
