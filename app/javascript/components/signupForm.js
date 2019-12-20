import React, { Component } from "react";
import {LoginFormContainer, LoginFormBG} from './LoginFormStyled';
import {H1} from './GlobalStyles/GlobalStyles'

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    };
  }
  onCancelClick() {
    this.props.onCancel(this.state);
  }
  onSignupClick() {
    // TODO: validate inputs
    this.props.onSignup(this.state);
  }

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleConfirmPasswordChange = (e) => {
    this.setState({ password_confirmation: e.target.value });
  };

  render() {
    return (
      <LoginFormBG>
        <LoginFormContainer>
          <H1 logo lg center margin light>Sign Up</H1>

          <label htmlFor="name"></label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />

          <label htmlFor="email"></label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            value={this.state.email}
            onChange={this.handleEmailChange}
          />

          <label htmlFor="psw"></label>
          <input
            type="password"
            placeholder="Password"
            name="psw"
            required
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          <label htmlFor="psw-repeat"></label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            required
            value={this.state.password_confirmation}
            onChange={this.handleConfirmPasswordChange}
          />

          <div className="clearfix">
            {/* <button type="button" onClick={() => this.onCancelClick()}>
              Cancel
            </button> */}
            <button type="submit" onClick={() => this.onSignupClick()}>
              Sign Up
            </button>
          </div>
        </LoginFormContainer>
      </LoginFormBG>
    );
  }
}

export default SignupForm;
