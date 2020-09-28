import React from 'react';
import './App.css';
import './digimon.css'
import digimons from './data'
import Library from './Library'

function App() {
  return (
    <div className="App">
      <h1>Welcome to the DigiWorld!</h1>
      <Library digimons={digimons} />
    </div>
  );
}

export default App;
