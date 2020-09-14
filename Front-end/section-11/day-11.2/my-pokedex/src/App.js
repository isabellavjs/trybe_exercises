import React from 'react';
import './App.css';
import './pokemons.css';
import pokemons from './data'
import Pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <h1>Welcome to your Pokedex!</h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
