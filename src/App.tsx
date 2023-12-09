import React from 'react';
import './App.css';
import {Card} from "./components/Card";
import styled from "styled-components";
import {GlobalStyles} from "./styles/GlobalStyles";


function App() {
    return (
        <StyledApp className="App">
            <Card/>
            <GlobalStyles/>
        </StyledApp>
    );
}

export default App;

const StyledApp = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`