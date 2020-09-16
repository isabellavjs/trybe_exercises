import React, { Component } from 'react';

class Digimons extends Component {
  render() {
    const { Digimon, Stage, Type, Attribute } = this.props.digimon;
    return (
      <div className="container">
        <div className="digimon-info">
          <h3>{Digimon}</h3>
          <h4>{Stage}</h4>
          <p>{`This digimon is type ${Type}`}</p>
          <p>{`Attribute: ${Attribute}`}</p>
        </div>
      </div >
    )
  }
}

export default Digimons;