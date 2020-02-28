import React from 'react';
import logo from './saifullslam.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        My name is saiful islam and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/saiful-csc"
          target="_blank"
          rel="noopener noreferrer"
        >
          check me out!
        </a>
      </header>
    </div>
  );
}

export default App;
