
import './App.css';
import Header from './Header'
import Body from './Body'
import styled from 'styled-components'

const Container = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


`



function App() {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  );
}

export default App;
