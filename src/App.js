import React from 'react';
import './App.scss';
import Navbar from './Components/navbar.js';

function App() {
  return (
    <div className="App">
      <div className="landing">    
          <Navbar></Navbar>
          <div className="wrapper">
            <h1>Hi, I'm Elbert and I make websites</h1>
          </div>
      </div>  
    </div>
  );
}

export default App;
