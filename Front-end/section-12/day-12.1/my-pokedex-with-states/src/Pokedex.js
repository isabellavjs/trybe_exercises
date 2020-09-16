import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      clickNumber: 0,
    }
  }

  handleClick = () => {
    this.setState((previousState) => ({
      clickPokemon: previousState.clickNumber + 1
    }))
  }


  render() {
    {/* {pokemons.map((eachPokemon) => {
          return <Pokemon
            key={eachPokemon.id}
            pokemon={eachPokemon}
          />
        })} */}
    const { pokemons } = this.props;
    return (
      <div className="pokedex">
        <button onClick={this.handleClick}>{this.state.Pokemon}</button>
      </div>
    )
  }
}

Pokedex.propTypes = { pokemons: PropTypes.arrayOf(PropTypes.object) };
Pokedex.defaultProps = { pokemons: {} };

export default Pokedex;