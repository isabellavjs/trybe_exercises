import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import pokemons from './data';

class Pokedex extends Component {
  constructor () {
    super();

    this.state = {
      indexPokemon: 0,
      typePokemon: null,
    };
    this.handleNextPokemon = this.handleNextPokemon.bind(this);
    this.handlePokemonType = this.handlePokemonType.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleNextPokemon() {
    const { indexPokemon } = this.state;
    if (indexPokemon < pokemons.length - 1 ) {
      this.setState((previous) => ({
        indexPokemon: previous.indexPokemon + 1,
      }));
    }
    else {
      this.setState({
        indexPokemon: 0,
      });
    }
    
  }

  handlePokemonType() {
    return pokemons.map(pokemon => pokemon.type)
      .filter((type, index, array) => {
        return array.indexOf(type) === index
      });
  }

  handleFilter(type) {
    this.setState({
      indexPokemon: 0,
      typePokemon: type,
    })
  }

  filterPokemon() {
    const { indexPokemon } = this.state;

    const filtered = pokemons.filter((pokemon) => {
      return indexPokemon
      ? indexPokemon === pokemon.type
      : true
    });
    return filtered;
  }

  render() {
    const { indexPokemon } = this.state;
    const types = this.handlePokemonType();
    const filterTypes = this.filterPokemon();
    return (
      <div>
        <Pokemon pokemon={pokemons[indexPokemon]} />
        <button onClick={() => this.handleNextPokemon(indexPokemon)} >Next Pokemon</button>
        {types.map((type, index) => <button key={index} onClick={() => this.handleFilter(type)}>{type}</button>)}
      </div>
    )
  }
}

Pokedex.propTypes = { pokemons: PropTypes.arrayOf(PropTypes.object) };
Pokedex.defaultProps = { pokemons: {} };

export default Pokedex;