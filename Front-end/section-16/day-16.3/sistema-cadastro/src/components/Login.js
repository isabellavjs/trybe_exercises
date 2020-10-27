import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      loggedIn: false,
    }
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange({ target }) {
    const { name, value } = target;
    this.setState( { [name]: value })
  }

  render() {
    const { loggedIn } = this.state;
    return(
      <div>
        <form>
          <label>
            E-mail:
            <input type="text" name="email" onChange={this.handleChange} />
          </label>
          <label>
            Senha:
            <input type="text" name="senha" onChange={this.handleChange} />
          </label>
        </form>
        <Route>
          {loggedIn ? <Redirect to="/cadastrado" /> : <p>Login não efetuado</p>}
        </Route>
      </div>
    );
  }
}

export default Login;
