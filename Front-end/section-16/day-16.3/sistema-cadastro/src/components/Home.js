import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
  render() {
    return(
      <div>
        <h1>Home - sistema de cadasttro</h1>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    );
  }
}

export default Home;
