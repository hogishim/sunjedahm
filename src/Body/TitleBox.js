import styled from 'styled-components'


const Container = styled.div`

width: 70rem;
height: 10rem;
display: flex;
align-items: center;
justify-content: center;
color: #244E37;
font-size: 18px;

`


const TitleBox = () =>{

    return(
        <Container >
            <b>제휴사 고객님들을 위해 감성 럭셔리 리조트, 선재담에서 프로모션을 진행합니다!</b>
        </Container>

    )




}

export default TitleBox;