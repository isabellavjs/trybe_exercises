import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <div>
        <form>
          <label>
            E-mail:
            <input type="text" name="email" />
          </label>
          <label>
            Senha:
            <input type="text" name="senha" />
          </label>
        </form>
      </div>
    )
  }
}

export default Login;
