import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, Login } from './components';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} /> 
      </Switch>
      </div>
      </Provider>
    );
  }
}

export default App;
