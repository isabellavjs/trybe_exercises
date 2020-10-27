import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Home, Login } from './components';

class App extends Component {
  renderRoutes() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />     
      </Switch>
    )
  }

  render() {
    return (
      <div>
        <header>Sistema de cadastro</header>
        <nav>
          <Link to="/login">Login</Link>
        </nav>
        {this.renderRoutes()}
      </div>
    );
  }
}

export default App;
