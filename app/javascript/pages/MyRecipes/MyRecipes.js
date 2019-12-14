import React, { Component } from "react";

// components
import RecipeCardList from "../../components/RecipeCards/RecipeList";
// styles
import { Container, H1 } from "../../components/GlobalStyles/GlobalStyles";

class MyRecipes extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Container>
          <p>Your Recipes</p>
          <p>Saved Recipes</p>
        </Container>

        <RecipeCardList />
      </React.Fragment>
    );
  }
}

export default MyRecipes;
