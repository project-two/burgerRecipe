import React from "react";
import LoginForm from "../components/loginForm";

const Login = () => {
  const handleLoginClick = (email, password) => {
    this.props.user.login(email, password);
  };

  return (
    <>
      <LoginForm
        errMessage={this.props.user.loginErrorMessage}
        login={(email, pass) => handleLoginClick(email, pass)}
      ></LoginForm>
    </>
  );
};

export default Login;
