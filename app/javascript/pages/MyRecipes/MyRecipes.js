import React, { Component } from 'react'
// components
import RecipeCardList from '../../components/RecipeCards/RecipeList'
// styles
import { Container, H1 } from '../../components/GlobalStyles/GlobalStyles'
import { RecipesToggleButton} from '../MyRecipes/MyRecipesStyled'


export default class MyRecipes extends Component {
  render() {
    return (
      <div>
            <React.Fragment>
      <Container>
        <RecipesToggleButton onClick={''}>Your Recipes</RecipesToggleButton>
        <RecipesToggleButton onClick={''}>Saved Recipes</RecipesToggleButton>
      </Container>

      <RecipeCardList />

    </React.Fragment>
      </div>
    )
  }
}

