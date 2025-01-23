import styled from "styled-components";

const Container = styled.div`
  width: 40rem;
  height: 10rem;

  overflow: hidden;
  display: flex;
`;

const LeftBox = styled.div`
  width: 25rem;
  height: 10rem;
  text-align: left;
`;

const RightBox = styled.div`
  width: 15rem;
  height: 10rem;
  text-align: right;
`;

const handleClick = (link) => {
    if (link) {
      window.open(link, '_blank'); 
    }
  };

const RoomBox = ({ data }) => {
  return (
    <Container onClick={() => handleClick(data.link)}>
      <LeftBox>
        {" "}
        <p>{data.title}</p>
        <p>
          (기준 {data.cap}인 / 최대 {data.maxcap}인)
        </p>
        <p>
          방구성: ({data.size}): 퀸 사이즈 침대{data.bed}, 욕실 {data.bath}
        </p>
      </LeftBox>
      <RightBox>
        {" "}
        <p>정가: KRW {data.orignprice}</p>
        <p>할인가: KRW {data.price}</p>
        <p>{data.special}</p>
      </RightBox>
    </Container>
  );
};

export default RoomBox;
