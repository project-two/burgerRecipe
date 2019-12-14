import React, { Component } from 'react';
import axios from 'axios';
import RecipeCard from './RecipeCard';
import { RecipesContainer } from './RecipeCardStyled'

export default class RecipeList extends Component {
    
    state = {
        test: [],
        activeList: 'recipe',
        recipe: [
            {
                name: 'The Big Juicy',
                image: 'https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'
            },
            {
                name: 'The Monster',
                image: 'https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
            },
            {
                name: 'The Fat Bastard',
                image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=964&q=80'
            },
            {
                name: 'The Big Juicy',
                image: 'https://images.unsplash.com/photo-1524121963016-6d7476758c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
            }
        ],
        savedRecipe: [
            {
                name: 'The Scomo Squiser',
                image: 'https://images.unsplash.com/photo-1524121963016-6d7476758c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
            },
            {
                name: 'The Scomo Squiser',
                image: 'https://images.unsplash.com/photo-1524121963016-6d7476758c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
            }
        ]
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

    renderRecipeItem(recipe) {
        return(
            <RecipeCard image={recipe.image}/>
        );
    }
    
    render() {
        
        //map out RecipeCard here props image, name of burger, username

        return (
            <RecipesContainer>

                {this.state[this.state.activeList].map(recipe => this.renderRecipeItem(recipe))}
{/*                 
                <RecipeCard image='https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80'/>
                <RecipeCard image='https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'/>
                <RecipeCard image='https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=964&q=80'/>
                <RecipeCard image='https://images.unsplash.com/photo-1524121963016-6d7476758c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'/>
                <RecipeCard image='https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80' />
                <RecipeCard image='https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'/>
                <RecipeCard image='https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=964&q=80'/>
                <RecipeCard image='https://images.unsplash.com/photo-1524121963016-6d7476758c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'/>
           */}
            </RecipesContainer>
        )
    }
}
