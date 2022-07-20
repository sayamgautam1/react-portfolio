import styled from "styled-components";
import ArrowImg from "./images/arrow.svg";

const ScrollNoticeContainer = styled.div`
  position: absolute;
  left: 120px;
  bottom: 18%;
  animation: fadeIn 1s forwards;
  animation-delay: 1s;
  opacity: 0;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ScrollNoticeImage = styled.img`
  position: relative;
  transform: rotate(7deg);
  animation: bounce 2s infinite forwards;
  @keyframes bounce {
    0% {
      transform: translate(0) rotate(7deg);
    }
    50% {
      transform: translate(-3px, 5px) rotate(7deg);
    }
    100% {
      transform: translate(0) rotate(7deg);
    }
  }
`;

const Text = styled.p`
  position: relative;
  margin-left: -20px;
  margin-top: -80px;
  transform: rotate(-56deg);
  font-weight: 600;
`;

const Scroll = () => {
  return (
    <ScrollNoticeContainer>
      <ScrollNoticeImage src={ArrowImg} />
      <Text>Scroll</Text>
    </ScrollNoticeContainer>
  );
};

export default Scroll;
