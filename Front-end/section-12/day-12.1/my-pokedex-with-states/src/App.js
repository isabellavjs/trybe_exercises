import React, { Component } from 'react';
import './App.css';
//import Button from './Button';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      pokemons: pokemons,
    };
  }

  render() {
    const { pokemons } = this.state;
    return (
      <div className="App">
        <h1>Welcome to your Pokedex!</h1>
        <Pokedex
          pokemons={pokemons}
        />
      </div>
    );
  }
}

export default App;
