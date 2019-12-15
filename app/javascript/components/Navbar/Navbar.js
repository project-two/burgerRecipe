import React, { Component } from "react";
import { NavBarContainer, LinkContainer } from "./NavbarStyled";
import { StyledLink } from "../../components/GlobalStyles/GlobalStyles";

class Navbar extends Component {
  handleLogoutClick(event) {
    event.preventDefault();
    this.props.user.logout();
  }

  render() {
    const user = this.props.user;
    return (
      <NavBarContainer>
        <LinkContainer>
          <StyledLink to="/">
            <i className="fas fa-hamburger fa-2x"></i>
          </StyledLink>
        </LinkContainer>
        {!user.isLoggedIn ? (
          <div>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/sign-up">Sign Up</StyledLink>
          </div>
        ) : null}
        {user.isLoggedIn && user.currentUser ? (
          <React.Fragment>
            <StyledLink to="/user/:user_id">My Recipes</StyledLink>
            <StyledLink to="/new-recipe">Add new Recipe</StyledLink>
            <StyledLink to="" onClick={(e) => this.handleLogoutClick(e)}>
              {this.props.user.currentUser} logout
            </StyledLink>
          </React.Fragment>
        ) : null}
      </NavBarContainer>
    );
  }
}

export default Navbar;
