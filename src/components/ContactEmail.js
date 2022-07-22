import styled from "styled-components/macro";

const Email = styled.div`
  color: black;
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  margin-bottom: 5px;
  display: inline-block;
  transition: border-bottom 0.2s;
  :hover {
    border-bottom: 2px solid white;
  }
`;
const ContactEmail = () => {
  return (
    <>
      <a href="mailto:">
        <Email>sayamgautam1@gmail.com</Email>
      </a>
    </>
  );
};

export default ContactEmail;
