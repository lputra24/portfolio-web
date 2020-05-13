import React from 'react';
import './App.scss';
import Navbar from './Components/Navigation/navbar.js';
import Skills from './Components/Parts/skills.js'

function App() {
  return (
    <div className="App">
      <div className="landing">    
        <Navbar></Navbar>
        <div className="wrapper">
          <h1 className="typed">Hi, I'm Elbert and I make websites</h1>
        </div>
      </div>
      <Skills>
        
      </Skills>
    </div>
  );
}

export default App;
