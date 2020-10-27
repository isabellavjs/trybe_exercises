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

  shouldRedirect() {
    const { handleLogin } = this.props;
    const { email, senha } = this.state;
    if (email.length > 1 && senha.length > 1) {
      handleLogin({ email, senha })
      this.props.history.push('/clientes')
    }
  }

  render() {
    const { email, senha, loggedIn } = this.state;
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
      </div>
    );
  }
}

export default Login;
