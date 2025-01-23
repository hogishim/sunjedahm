import styled from "styled-components";
import RoomBox from "./RoomBox";
import TitleBox from "./TitleBox";
import ReserveInfo from "./ReserveInfo";
import RoomInfo from "./RoomInfo";
import data from "./roominformation.json";
import Date from "./Date";
import Title from "./Title";

const Container = styled.div`
  width: 70rem;
  padding-bottom: 4rem;
  background-color: #f2ede0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`

width: 40rem;
height: 10rem;
overflow: hidden;


`

const Row = styled.div`
  height: ${(props) => props.height};
  width: 55rem;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hr = styled.div`
  width: ${(props) => props.width};
  border-bottom: 1px solid black;
`;

const LeftBox = styled.div`
  width: 10rem;
  height: ${(props) => props.height};
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eacab1;
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
  box-sizing: border-box;
`;

const Body = () => {
  return (
    <>
      <Container>
        <TitleBox />

        <Hr width="55rem"/>
        <Row height="10rem">
          <LeftBox height="10rem">혜택기간</LeftBox>
          <RightBox height="10rem">
            <Date />
          </RightBox>
        </Row>

        <Row height="140rem">
          <LeftBox height="140rem">특별 요금</LeftBox>
          <RightBox height="140rem">

            <Title text="CARAVAN" />

            <Image />
            <RoomBox key="0" data={data[0]} />

            <RoomBox key="1" data={data[1]} />


            <Hr width="40rem"/>
            <Title text="PARK & FORST GLAMPING" />
            <Image />
            <RoomBox key="2" data={data[2]} />



            <RoomBox key="3" data={data[3]} />

            <RoomBox key="5" data={data[4]} />

            <Hr width="40rem"/>
            <Title text="PET GLAMPING" />

            <Image />
            <RoomBox key="6" data={data[5]} />

            <Hr width="40rem"/>
            <Title text="OCEAN VIEW GLAMPING" />
            <Image />
            <RoomBox key="7" data={data[6]} />

            <RoomBox key="8" data={data[7]} />

            <RoomBox key="9" data={data[8]} />



          </RightBox>
        </Row>

        <Row height="20rem">
          <LeftBox height="20rem">유의 사항</LeftBox>
          <RightBox height="20rem">
            <RoomInfo />
          </RightBox>
        </Row>

        <Row height="25rem">
          <LeftBox height="25rem">예약 문의</LeftBox>
          <RightBox height="25rem">
            <ReserveInfo />
          </RightBox>
        </Row>
      </Container>
    </>
  );
};

export default Body;
