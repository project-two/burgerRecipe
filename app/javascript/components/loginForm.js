import React, { Component } from "react";
import {LoginFormContainer, LoginFormBG} from './LoginFormStyled';
import {H1} from './GlobalStyles/GlobalStyles'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onLoginClick() {
    // TODO: validate inputs
    this.props.login(this.state.email, this.state.password);
  }

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <LoginFormBG>
        <LoginFormContainer>
          <H1 logo lg center margin light>Login</H1>
          <p>{this.props.errMessage}</p>

          <label htmlFor="email"></label>
          <input
            type="text"
            placeholder= "email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <label htmlFor="psw"></label>
          <input
            type="password"
            placeholder="password"
            name="psw"
            required
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          <div className="clearfix">
            <button onClick={() => this.onLoginClick()}>Login</button>
          </div>
        </LoginFormContainer>
      </LoginFormBG>
    );
  }
}

export default LoginForm;
