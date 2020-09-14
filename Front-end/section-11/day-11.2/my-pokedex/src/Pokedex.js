import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        {pokemons.map((eachPokemon) => {
          return <Pokemon
            key={eachPokemon.id}
            pokemon={eachPokemon}
          />
        })}
      </div>
    )
  }
}

Pokedex.propTypes = { pokemons: PropTypes.arrayOf(PropTypes.object) };
Pokedex.defaultProps = { pokemons: {} };

export default Pokedex;