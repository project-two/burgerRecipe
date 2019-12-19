import React, { Component } from "react";
import { Link } from "@reach/router";
import {
  RecipeImage,
  RecipeContainer,
  BurgerName,
  RecipeHeading,
  PostDetailsContainer,
  PostMethodContainer
} from "./RecipeStyle";
import Likes from "../Likes/Likes";
import axios from "axios";
import { number } from "prop-types";

class Recipe extends Component {
  state = {
    recipe: {},
    ingredients: [],
    liked: false
  };

  componentDidMount() {
    this.loadRecipe();
  }

  loadRecipe() {
    let currentRecipe = this.props.recipeId;
    console.log(currentRecipe);
    axios
      .get(`/api/recipes?recipe=${currentRecipe}`)
      .then((res) => {
        console.log(res.data);
        this.setState({ recipe: res.data[0] });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  likeVoteHandler = () => {
    //TODO post like
    console.log("clicked!!!, do a post!");
  };

  render() {
    const recipe = this.state.recipe;

    return (
      <RecipeContainer>
        <PostDetailsContainer>
          <BurgerName>{recipe.name}</BurgerName>
          <p>
            by <Link to={`/user/${recipe.user_id}`}>{recipe.username}</Link>
          </p>
          <RecipeImage src={recipe.url} />
          <Likes
            recipeId={recipe.id}
            likeCount={recipe.like_count}
            onClick={() => this.likeVoteHandler()}
          />
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
