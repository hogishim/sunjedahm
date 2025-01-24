import styled from "styled-components";
import mainImage from '../source/main .jpg';

const Container = styled.div`

width: 70rem;
height: 40rem;
  overflow: hidden;

`

const BackgroundImage = styled.img`

width: 100%;
height: 100%;
 object-fit: cover;


`

const Header = () =>{

    return(

        <Container>
            <BackgroundImage src={mainImage}/>
        
        </Container>


    )
    


}

export default Header;