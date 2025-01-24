import styled from "styled-components";

const Container = styled.div`
  width: 40rem;
  height: 6rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const LeftBox = styled.div`
  width: 20rem;
  height: 6rem;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const RightBox = styled.div`
  width: 15rem;
  height: 6rem;
  text-align: right;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  color: #244e37;
  font-size: 18px;
  font-weight: 650;
`;

const UpperBox = styled.div`
  height: 4rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const LowerBox = styled.div`
  height: 2rem;
  display: flex;
  width: 100%;
  text-align: right;
`;

const Cap = styled.div``;

const Room = styled.div`
  height: 2rem;
  display: flex;
  display: flex;
  align-items: top;
  justify-content: right;
`;

const Original = styled.div`
  color: #919d9d;
`;

const Price = styled.div`
  color: #ed7969;
`;

const Special = styled.div`
  height: 2rem;
  width: 100%;
  text-align: right;
  display: flex;
  align-items: top;
  justify-content: right;
`;

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};

const RoomBox = ({ data }) => {
  return (
    <Container onClick={() => handleClick(data.link)}>
      <LeftBox>
        <UpperBox>
          <Title>{data.title}</Title>
          <Cap>
            (기준 {data.cap}인 / 최대 {data.maxcap}인)
          </Cap>
        </UpperBox>
        <LowerBox>
          <Room>
            방구성: ({data.size}): 퀸 사이즈 침대{data.bed}, 욕실 {data.bath}
          </Room>
        </LowerBox>
      </LeftBox>
      <RightBox>
        <UpperBox>
          <Original>
            <del>정가: KRW {data.orignprice}</del>
          </Original>
          <Price>할인가: KRW {data.price}</Price>
        </UpperBox>
        <LowerBox>
          <Special>{data.special}</Special>
        </LowerBox>
      </RightBox>
    </Container>
  );
};

export default RoomBox;
