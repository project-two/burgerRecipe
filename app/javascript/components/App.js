import React, { Component } from "react";
import { Router, navigate } from "@reach/router";
// Pages
import Home from "../pages/Home/Home";
import MyRecipes from "../pages/MyRecipes/MyRecipes";
import CreateRecipe from "../pages/CreateRecipe/CreateRecipe";
import Recipe from "../pages/Recipe/Recipe";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

// Components
import Navbar from "./Navbar/Navbar";

// idk
import { SERVER_URL } from "../config";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    this.state = {
      isLoggedIn: !!auth ? true : false,
      currentUser: null,
      currentUserId: null,
      loginErrorMessage: ""
    };
  }

  componentDidMount() {
    this.getUser();
    
  }

  getUser = () => {
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    if (!auth) return;
    axios
      .get(`${SERVER_URL}/api/users/${auth.userId}`, {
        headers: { Authorization: `Bearer ${auth.token}` }
      })
      .then((response) => {
        this.setState({
          currentUser: response.data,
          currentUserId: auth.userId,
          isLoggedIn: true

          
        });
        // now that login has occured, navigate to the home page
        navigate("/");
      });
  }

  handleLogin = (email, password) => {
    axios
      .post(`/api/auth/get_token`, {
        email: email,
        password: password
      })
      .then((response) => {
        sessionStorage.setItem("auth", JSON.stringify(response.data));
        this.getUser();
      })
      .catch((err) => {
        this.setState({
          loginErrorMessage: "Fail to login. Pleaes try again!"
        });
        navigate("/sign-up");
      });
  }

  handleLogout = () => {
    sessionStorage.setItem("auth", null);
    this.setState({ currentUser: null, isLoggedIn: false });
    navigate("/");
  }

  render() {
  
    const userDetails = {
      isLoggedIn: this.state.isLoggedIn,
      loginErrorMessage: this.state.loginErrorMessage,
      currentUser: this.state.currentUser,
      currentUserId: this.state.currentUserId,

      logout: () => this.handleLogout(),
      login: (email, pass) => this.handleLogin(email, pass)
    };

    return (
      <React.Fragment>
        <Navbar user={userDetails}></Navbar>

        <Router>
          <Home path="/"/>
          <MyRecipes path="/user/:userId" user={userDetails} logo />
          <CreateRecipe path="/new-recipe" user={userDetails} />
          <Recipe path="/recipe/:recipeId" user={userDetails} />
          <Login path="/login" user={userDetails} />
          <SignUp path="/sign-up" user={userDetails} />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
