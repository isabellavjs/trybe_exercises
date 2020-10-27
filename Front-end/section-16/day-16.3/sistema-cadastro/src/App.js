import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login } from './components';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} /> 
      </Switch>
      </div>
    );
  }
}

export default App;
