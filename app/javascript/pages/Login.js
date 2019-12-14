import React, { Component } from "react";
import LoginForm from "../components/loginForm";

class Login extends Component {
  handleLoginClick(email, password) {
    this.props.user.login(email, password);
  }

  render() {
    return (
        <LoginForm
          errMessage={this.props.user.loginErrorMessage}
          login={(email, pass) => this.handleLoginClick(email, pass)}>
        </LoginForm>
    );
  }
}

export default Login;