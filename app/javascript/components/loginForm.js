import React, { Component } from "react";

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
      <div>
        <h1>Login</h1>

        <p>{this.props.errMessage}</p>

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          required
          value={this.state.email}
          onChange={this.handleEmailChange}
        />

        <label htmlFor="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />

        <div className="clearfix">
          <button onClick={() => this.onLoginClick()}>Login</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
