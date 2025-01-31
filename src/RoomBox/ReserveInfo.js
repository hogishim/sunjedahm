import styled from 'styled-components'
import chatimage from '../source/chat.png'

const Container = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;

`




const ButtonContainer = styled.div`

width: 40rem;
display: flex;
justify-content: center;
margin: 1rem;

`


const TalkButton = styled.div`

width: 15rem;
height: 3rem;
background-color: #24e864;
border-radius: 5rem;
display: flex;

`

const TalkImage = styled.img`

width: 3rem;
height: 3rem;


`

const TalkText = styled.div`

width: 12rem;
height: 3rem;
display: flex;
align-items: center;
justify-content: center;


`

const handleClick = (link) => {
  if (link) {
    window.open(link, "_blank");
  }
};


const ResrveInfo = () => {
  return (
    <Container>
      예약 문의: 평일 10:00-18:00에 상담 가능합니다.
      <ul>
        <li>전화 010-7683-6220으로 예약 가능합니다.</li>
        <li>이메일 info@sunjedahm.com으로 예약 가능합니다. </li>
        <li>
          네이버에서 ‘선재담’ 검색 후, ‘문의하기’ 클릭하여 네이버톡톡으로 예약
          가능합니다.{" "}
        </li>
      </ul>
      <ButtonContainer>
        <TalkButton onClick={() => handleClick("https://talk.naver.com/ct/w4kb8o4?frm=mnmb&frm=nmb_detail#nafullscreen")}> 

          <TalkImage src={chatimage} />
          <TalkText>네이버 톡톡 문의하기</TalkText>

        </TalkButton>
      </ButtonContainer>
      에약 절차
      <ul>
        <li>예약 시 재직 중인 회사를 알려주시기 바랍니다.</li>
        <li>
          객실 예약 시, 객실당 5만원의 사전 예약금을 지불하셔야 합니다. 차액은
          체크인 시 현장에서 결제해 주시기 바랍니다.
          <br />
          입금 관련 상세 내용은 상담 후, 안내받으실 수 있습니다.{" "}
        </li>
        <li>
          전화, 이메일, 또는 톡톡으로 예약 요청을 주시면, 검토 예약 확정 관련
          내용을 안내드립니다.
        </li>
        <li>
          일정 변경으로 방문이 어려우신 경우, 반드시 사전에 연락 부탁드립니다.
          예약금은 10일 전까지 전 환불되며, 이후 숙소 정책에 따라 차등
          환불됩니다.{" "}
        </li>
      </ul>
    </Container>
  );
};

export default ResrveInfo;
