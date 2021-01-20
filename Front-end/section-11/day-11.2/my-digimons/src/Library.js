import React, { Component } from 'react';
import Digimons from './Digimons'

class Library extends Component {
  render() {
    const { digimons } = this.props;
    return (
      <div className="digilist">
        {digimons.map((eachDigimon) => {
          return <Digimons
            key={eachDigimon.Number}
            digimon={eachDigimon}
          />
        })}
      </div>
    );
  }
}

export default Library;