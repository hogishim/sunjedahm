import data from "../source/date.json";
import styled from "styled-components";

const Container = styled.div`
`;

const Info = styled.div`
  color: red;
`;


const RoomInfo = () => {
  return (
    <Container>
      <ul>
        <li>
          해당 프로모션은 일요일 - 목요일 ({data.start} - {data.end} 기간)
          체크인 시, 이용 가능합니다. <br />{" "}
          {data.holiday !== null
            ? <Info>
              ※ 프로모션 기간 중 금/토요일 및 해당 기간({data.holiday})에는, 선착순으로 한정된
              객실에 한해 프로모션이 적용 됩니다. 
            </Info>
            : <>※프로모션 기간 중 금/토요일에는, 선착순으로 한정된 객실에 한해 프로모션이 적용 됩니다.</>}

        </li>
        <li>
          반려동물 동반은 '펫 글램핑' 예약 시에만 가능합니다. 펫 글램핑 객실을
          제외한 객실 및 캠핑 사이트에서는 반려동물 동반이 불가능합니다.{" "}
        </li>
        <li>체크인 시간은 15:00, 체크아웃 시간은 11:00입니다. </li>
        <li>
          객실별 기준 인원 외 추가 인원은 예약 시 반드시 기재 바랍니다. 추가
          인원은 현장 체크인 시 결제 가능합니다.
        </li>
        <li>
          <Info>
            인원 추가 요금: 36개월 미만 무료 / 36개월 - 초등학생 2만원 / 중학생
            이상 3만원
          </Info>
        </li>
        <li>
          화재 위험으로 글램핑 및 카라반 객실에서 화로 등 개인 화기 사용이
          불가능합니다.{" "}
        </li>
        <li>바비큐 3만원, 불멍 2만원에 현장 신청 및 결제 가능합니다.</li>
      </ul>
    </Container>
  );
};

export default RoomInfo;
