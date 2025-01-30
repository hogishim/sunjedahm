import styled from "styled-components";

const Container = styled.div`
  height: 5rem;
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #244E37;
  font-weight: 600;
`;

const Title = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Title;
