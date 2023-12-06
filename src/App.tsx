import React from 'react';
import './App.css';
import styled from "styled-components";
import {StyledImage} from "./components/Image.styled";

function App() {
  return (
    <div className="App">
    <Box>
        <Card>
            <StyledImage>
                <img src="images/img.png" alt="image"/>
            </StyledImage>
        </Card>
    </Box>
    </div>
  );
}

export default App;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Card = styled.div`
  width: 300px;
  height: 350px;
  border-radius: 15px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
`