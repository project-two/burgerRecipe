import React, { Component } from 'react'
import axios from 'axios';
// components
import RecipeList from "../../components/RecipeCards/RecipeList";
// styles
import { Container, H1 } from '../../components/GlobalStyles/GlobalStyles'
import { RecipesToggleButton} from '../MyRecipes/MyRecipesStyled'


export default class MyRecipes extends Component {
  
  state = {
    recipe: [
        {
            name: 'The Big Juicy',
            url: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
        },
        {
            name: 'The Monster',
            url: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
        },
        {
            name: 'The Fat Bastard',
            url: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=964&q=80'
        },
        {
            name: 'The Big Juicy',
            url: 'https://images.unsplash.com/photo-1524121963016-6d7476758c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        }
    ],
    savedRecipe: [
        {
            name: 'The Scomo Squiser',
            url: 'https://images.unsplash.com/photo-1524121963016-6d7476758c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        },
        {
            name: 'The Scomo Squiser',
            url: 'https://images.unsplash.com/photo-1524121963016-6d7476758c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        }
    ],
    recipeType: true
    }

    componentDidMount() {

          axios.get('') // get recipe image
              .then(function (response) {
                  // handle success
                  this.setState({ test: response})
                  console.log(response);
              })
              .catch(function (error) {
                  // handle error
                  console.log(error);
              })
    }

    yourRecipeHandler = () => {

        this.setState({
            recipeType: true
        })
    }
    savedRecipeHandler = () => {
        this.setState({
            recipeType: false
        })
    }

    render() {
        
        return (
        <div>
        <React.Fragment>
        <Container>
            <RecipesToggleButton active={this.state.recipeType} onClick={this.yourRecipeHandler}>Your Recipes</RecipesToggleButton>
            <RecipesToggleButton active={!this.state.recipeType} onClick={this.savedRecipeHandler}>Saved Recipes</RecipesToggleButton>
        </Container>
            { this.state.recipeType ? 
                <RecipeList recipe={this.state.recipe} username={'Hello'}/> :
                <RecipeList recipe={this.state.savedRecipe} username={'Hello'}/> }
        </React.Fragment>
        </div>
        )
    }
}

