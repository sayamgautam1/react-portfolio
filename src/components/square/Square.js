import styled from "styled-components";

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

const Square = () => {
  return (
    <SquareHeader>
      <SquareTitle>
        <p>
          AB
          <br />
          OUT<span>.</span>
        </p>
      </SquareTitle>
    </SquareHeader>
  );
};

export default Square;
