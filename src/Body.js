import styled from "styled-components";
import RoomBox from "./RoomBox";
import TitleBox from "./TitleBox";
import ReserveInfo from "./ReserveInfo";
import RoomInfo from "./RoomInfo";
import data from './roominformation.json';

const Container = styled.div`
  width: 70rem;
  padding-bottom: 20rem;
  background-color: #f2ede0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Row = styled.div`

  height: ${(props) => props.height};
width: 60rem;
border-bottom: 1px solid black;
display: flex;
justify-content: center;
align-items: center;

`

const Hr = styled.div`

width: 60rem;
border-bottom: 1px solid black;

`

const LeftBox = styled.div`
  width: 15rem;
  height: ${(props) => props.height};
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
    background-color: #EACAB1;

`;

const RightBox = styled.div`
  width: 45rem;
    height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
    align-items: center;
  justify-content: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  box-sizing: inline;
  box-sizing: border-box; /* 모든 요소에 대해 border-box 설정 */

 

`;

const Body = () => {

 


  return (
    <>
      <Container>

        <TitleBox />

        <Hr />
        <Row height="10rem">
          <LeftBox height="10rem">혜택기간</LeftBox>
          <RightBox height="10rem">2024</RightBox>
        </Row>


        <Row height="70rem">
          <LeftBox height="70rem">특별 요금</LeftBox>
          <RightBox height="70rem">
          {data.map(( _, index) => (
                     <RoomBox key={index} data={data[index]}/>
        ))}
            
 </RightBox>
        </Row>

        <Row height="20rem">
          <LeftBox height="20rem">유의 사항</LeftBox>
          <RightBox height="20rem"><RoomInfo /></RightBox>
        </Row>

        <Row height="25rem">
          <LeftBox height="25rem">예약 문의</LeftBox>
          <RightBox height="25rem"><ReserveInfo /></RightBox>
        </Row>





      </Container>
    </>
  );
};

export default Body;
