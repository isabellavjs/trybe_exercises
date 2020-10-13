import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className='container'>
        <div className='pokemon-info'>
          <h3>{name}</h3>
          <p>{type}</p>
          <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          <img src={image} alt={name} />
        </div>
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }).isRequired,
    image: PropTypes.string,
  }).isRequired

}

export default Pokemon;