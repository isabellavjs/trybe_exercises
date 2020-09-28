import React, { Component } from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';
import pokemons from './data';

class Pokedex extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      index: 0,
    }
  }

  handleClick = () => {
    this.setState((previousState) => ({
      index: previousState.index + 1
    }))
    if ( pokemons.length - 1 === this.state.index) {
      this.setState({index: 0})
    }
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
        <Pokemon pokemon={pokemons[this.state.index]}/>
        <button onClick={this.handleClick}>{this.state.index}</button>
      </div>
    )
  }
}

Pokedex.propTypes = { pokemons: PropTypes.arrayOf(PropTypes.object) };
Pokedex.defaultProps = { pokemons: {} };

export default Pokedex;