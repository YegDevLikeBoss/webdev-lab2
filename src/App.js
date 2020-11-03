import React from 'react';
import logo from './logo.svg';
import './App.css';
import meme from './meme.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="pane">
          <img src={meme}></img>
          <h2>Такова реальность</h2>
          <h3>К счастью пандемия внесла свои коррективы</h3>
        </div>
      </header>
    </div>
  );
}

export default App;
