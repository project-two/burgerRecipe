import React, { Component } from "react";
import {
  RecipeImage,
  RecipeContainer,
  BurgerName,
  LikesContainer,
  RecipeHeading,
  PostDetailsContainer,
  PostMethodContainer
} from "./RecipeStyle";
import axios from "axios";
import { number } from "prop-types";

class Recipe extends Component {
  state = {
    recipe: [],
    ingredients: [],
    liked: false
  };

  componentDidMount() {
    let currentRecipe = this.props.recipeId;
    console.log(currentRecipe)
    axios.get(`/api/recipes?recipe=${currentRecipe}`) 
        .then( res => { 
            console.log(res.data)
            this.setState({ recipe: res.data })
        })
        .catch( error =>  {
            console.log(error); 
    })
  }

  likeVoteHandler = () => {
    // post 
    
    !this.state.liked
      ? this.setState({ liked: true })
      : this.setState({ liked: false });

    const currentNumberOfLikes = this.state.recipe.likes;
    this.setState(prevState => ({
      recipe: { ...prevState.recipe, likes: currentNumberOfLikes + 1 }
    }));
  };

  render() {
    const recipe = this.state.recipe;
    return (
      <RecipeContainer>
        <PostDetailsContainer>
          {recipe.map(ele => <BurgerName>{ele.name}</BurgerName>)}
          {recipe.map(ele => <p>by {ele.username}</p>)}
          {recipe.map(ele => <RecipeImage src={ele.url}/>)}
          
          {recipe.map(ele => <LikesContainer onClick={this.likeVoteHandler}/>)}
            {!this.state.liked ? ( <i className="far fa-thumbs-up fa-lg"></i> ) : 
            ( <i className="fas fa-thumbs-up fa-lg"></i> )}
          {recipe.map(ele => <span>{ele.like_count}</span>)}
        </PostDetailsContainer>
        
        <PostMethodContainer>
          <RecipeHeading>Ingredients</RecipeHeading>
          <div>
            {/* { this.state.recipe.ingredients.map(recipe => (
              <p>{recipe}</p>
            ))} */}
          </div>
          <RecipeHeading>Method</RecipeHeading>
          <div>
            {/* {this.state.recipe.method.map(method => (
              <p>{method}</p>
            ))} */}
          </div>
        </PostMethodContainer>
      </RecipeContainer>
    );
  }
}

export default Recipe;


// name: "The Pace Maker",
// userName: "Kay",
// image:
//   "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
// likes: 150,
// ingredients: ["Cheese", "Fish", "Chilli"],
// method: ["Frying", "Toppings", "Eat"]