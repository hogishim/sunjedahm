import styled from 'styled-components'


const Container = styled.div`

width: 40rem;
height: 10rem;
background-color: red;

`

const handleClick = (link) =>{
    if (link) {
        window.location.href = link;
      }

}



const RoomBox = ({data}) =>{

    return(

        <Container onClick={()=>handleClick(data.link)}>
            <p>{data.title}</p>
        </Container>


    )



}

export default RoomBox;