import React from "react";
import SignupForm from "../components/signupForm";
import { navigate } from "@reach/router";
import axios from "axios";

const SignUp = () => {
  const handleSignup = (data) => {
    axios
      .post(`/api/users`, {
        user: {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation
        }
      })
      .then((response) => {
        alert("user successfully created, please login");

        // Navigate to the home page.
        navigate("/");
      });
  };

  const handleCancelSignup = (e) => {
    // Navigate to the home page.
    navigate("/");
  };

  return (
    <>
      <SignupForm
        onSignup={(data) => handleSignup(data)}
        onCancel={(e) => handleCancelSignup(e)}
      ></SignupForm>
    </>
  );
};

export default SignUp;
