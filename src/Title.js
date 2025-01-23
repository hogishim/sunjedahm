import styled from 'styled-components'

const Container = styled.div`

height: 5rem;
width: 40rem;
display: flex;
justify-content: center;
align-items: center;

`

const Title = ({text}) =>{

    return(

        <Container>
        {text}
        </Container>
    )


}

export default Title;