import { useEffect } from 'react';
import styled from 'styled-components'
import sunje from './sunje.png'

const Container = styled.div`

width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`

const Image = styled.img`

width: 30%;



`

function App() {

    useEffect(() => {
    
        window.location.href = 'https://sunjedahm.github.io/sunjediscount/';
    }, []);

    return (
        <Container>

        <Image src={sunje} />
            <>예약 페이지로 이동중입니다</>
        </Container>





    )
};

export default App;