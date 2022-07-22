import styled from "styled-components/macro";

const Github = styled.div`
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
const ContactGithub = () => {
  return (
    <>
      <a href="https://github.com/sayamgautam1" target={"_blank"}>
        <Github>sayamgautam1</Github>
      </a>
    </>
  );
};

export default ContactGithub;
