import Button from "../button/Button";
import styled from "styled-components";
import { breakpoints } from "../../Media";
import ContactEmail from "../ContactEmail";

const FooterCont = styled.div`
  width: 100%;
  padding: 80px;
  background-color: white;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;

const CenterCTA = styled.div`
  padding: 0;
  width: 100%;
  flex: 1 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  background-position: center center;
  h3 {
    text-align: center;
    max-width: 250px;
    margin: 30px auto 20px auto;
    text-align: left;
    font-family: "Lato", sans-serif;
    font-size: 28px;
    line-height: 128.95%;
    font-weight: 800;
    letter-spacing: -0.025em;
  }
`;
const ButtonContainer = styled.div`
  margin: 0px 0;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;
const CenterButton = styled.div`
  margin: 0 auto;
`;
const Footer = () => {
  return (
    <FooterCont>
      <CenterCTA>
        <h3>Want to learn more?</h3>
        <ButtonContainer>
          <Button>
            {" "}
            <a href="mailto:sayamgautam1@gmail.com">Let's chat</a>
          </Button>
        </ButtonContainer>
      </CenterCTA>
    </FooterCont>
  );
};

export default Footer;
