import React, { Component } from 'react'
import axios from 'axios';
// components
import RecipeList from "../../components/RecipeCards/RecipeList";
// styles
import { Container, H1 } from '../../components/GlobalStyles/GlobalStyles'
import { RecipesToggleButton} from '../MyRecipes/MyRecipesStyled'


export default class MyRecipes extends Component {
  
  state = {
    recipe: [],
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
        let currentUser = this.props.userId;
        axios.get(`/api/recipes?user=${currentUser}`) 
            .then( res => { 
                this.setState({ recipe: res.data })
            })
            .catch( error =>  {
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
                <RecipeList recipe={this.state.recipe}/> :
                <RecipeList recipe={this.state.savedRecipe}/> }
        </React.Fragment>
        </div>
        )
    }
}