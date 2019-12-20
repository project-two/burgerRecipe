import React, { Component } from 'react'
import axios from 'axios';
//styles
import { HomeHeroSection } from "./HomeStyled";
import { Container, Logo, H1 } from "../../components/GlobalStyles/GlobalStyles";
//components
import Search from "../../components/Search/Search";
import RecipeList from '../../components/RecipeCards/RecipeList'

export default class Home extends Component {

    state = {
        recipe: [],
        filteredRecipes: [],
        search: ''
    }

    componentDidMount() {

        axios.get('/api/recipes') 
            .then( res => {                
                this.setState({ recipe: res.data }) 
            })
            .catch( error =>  {
                console.log(error); 
            })
    }

       
    handleSearch = (event) => {
        let search = event.target.value;
        
        // let filteredRecipes = this.state.recipe.filter(recipe => recipe.ingredients.filter(ing => ing.name === search ? recipe : null ))
        let filteredRecipes = this.state.recipe
            .filter( recipe => {   
                for (let i = 0; i < recipe.ingredients.length; i++) {
                    if (recipe.ingredients[i].name === search && search.length > 1){
                        return recipe
                    }
                }
            });

        this.setState({search: search ,filteredRecipes: filteredRecipes})
    }   

    render() {
        return (
            <React.Fragment>
                <HomeHeroSection>
                    <Logo>JuicyB</Logo>
                    <Search search={this.state.search} handleSearch={this.handleSearch} />
                </HomeHeroSection>
                <Container>
                    {!this.state.search ?
                        <H1>Popular Recipes</H1> : 
                        <H1>Recipes With {this.state.search}</H1>  
                    }
                </Container>
                <Container>
                    <RecipeList recipe={this.state.filteredRecipes.length > 0 ? this.state.filteredRecipes : this.state.recipe} />
                </Container>
                
            </React.Fragment>
        )
    }
}