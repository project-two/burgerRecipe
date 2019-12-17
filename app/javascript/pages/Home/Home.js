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
        username: []
    }

    async componentDidMount() {

        await axios.get('/api/recipes') 
            .then( res => {                
                this.setState({ recipe: res.data }) 
            })
            .catch( error =>  {
                console.log(error); 
            })
        
        this.state.recipe.forEach(user => {
         
            axios.get(`/api/users/${user.user_id}`) 
                .then( res => {
                    
                this.setState( prevState => ({
                    username: [...prevState.username, res.data]
                }))
            })

            .catch( error =>  {
                console.log(error); 
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <HomeHeroSection>
                    <Logo>JuicyB</Logo>
                    <Search />
                </HomeHeroSection>
                
                <Container><H1 logo>Popular Recipes</H1></Container>
                <Container> 
                    <RecipeList recipe={this.state.recipe} username={this.state.username} />
                </Container>
                
            </React.Fragment>
        )
    }
}