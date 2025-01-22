import styled from "styled-components";
import RoomBox from "./RoomBox";
import TitleBox from "./TitleBox";

const Container = styled.div`
  width: 70rem;
  height: 100rem;
  background-color: #f2ede0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  width: 60rem;
  height: 70rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
`;



const LeftBox = styled.div`
  width: 15rem;
  height: 70rem;
  flex-direciton: column;
  align-items: center;
  border-bottom: 1px solid black;
  border-top: 1px solid black;
  background-color: #EACAB1;
`;

const RightBox = styled.div`
  width: 45rem;
  height: 70rem;
  display: flex;
  flex-direciton: column;
  justify-content: center;

`;

const Body = () => {
  return (
    <>
      <Container>

        <TitleBox />

        <Box>
          <LeftBox></LeftBox>

          <RightBox><RoomBox /></RightBox>
          
        </Box>
      </Container>
    </>
  );
};

export default Body;
