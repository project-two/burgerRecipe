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

class Recipe extends Component {
  state = {
    recipe: {
      ingredients: [],
      instruction:[],
    },
    loged_in: false
  };

  componentWillMount() {
    this.loadRecipe();
  }

  loadRecipe() {
    let currentRecipe = this.props.recipeId;
    axios
      .get(`/api/recipes?recipe=${currentRecipe}`)
      .then(res => {
        let data = res.data[0];
        data["instruction"] = JSON.parse(data["instruction"]);
        this.setState({ recipe: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const recipe = this.state.recipe;
    const recipe_id = this.props.recipeId;
    console.log(recipe_id)
    return (
      <RecipeContainer>
        <PostDetailsContainer>
          <BurgerName>{recipe.name}</BurgerName>
          <p>
            by <Link to={`/user/${recipe.user_id}`}>{recipe.username}</Link>
          </p>
          <RecipeImage src={recipe.url} />
          <Likes recipe_id={recipe_id} />
        </PostDetailsContainer>

        <PostMethodContainer>
          <RecipeHeading>Ingredients</RecipeHeading>
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>qty</td>
                <td>unit</td>
                <td>name</td>
              </tr>
            </thead>
            <tbody>
              {recipe.ingredients.map((recipe, idx) => (
                <tr key={`ingrd_${idx}`}>
                  <td>{idx}</td>
                  <td>{recipe.qty}</td>
                  <td>{recipe.unit}</td>
                  <td>{recipe.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <RecipeHeading>Method</RecipeHeading>
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>step</td>
              </tr>
            </thead>
            <tbody>
              {recipe.instruction.map((step, idx) => (
                <tr key={`step_${idx}`}>
                  <td>{idx}</td>
                  <td>{step}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
