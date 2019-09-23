import React from 'react';
import logo from './logo.svg';
import './App.css';
import Youtube from './components/Youtube';
import Navbar from './components/Navbar';
import {Container, Divider} from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Container>
        <br/>
        <br/>
        <br/>
        <Navbar />
        <Youtube />
      </Container>
    </div>
  );
}

export default App;
