import data from "./date.json";
import styled from "styled-components"

const Container = styled.div`

width: 45rem;
height: 10rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding-left: 2rem;
padding-right: 2rem;
  box-sizing: border-box; 

`

const Text = styled.div`

width: 39rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-size: 13px;

`
const Date = () => {
  return (
    <Container>
      <p>
        {data.start} - {data.end}
      </p>
      <p>
        {data.holiday !== null
          ? <Text>※ 프로모션 기간 중 금/토요일 및 아래 날짜에는, 선착순으로 한정된 객실에 한해 프로모션이 적용 됩니다.<p>{data.holiday}</p></Text>
          : <Text>※ 프로모션 기간 중 금/토요일에는, 선착순으로 한정된 객실에 한해 프로모션이 적용 됩니다.</Text>}
      </p>
    </Container>
  );
};

export default Date;
