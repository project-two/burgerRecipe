import React, { Component } from "react";
import { RecipeImage, RecipeContainer } from "./RecipeStyle";
import axios from "axios";

class Recipe extends Component {
  state = {
    recipe: {
      burgerName: "Any burger",
      userName: "Kay",
      image:
        "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
      likes: "150",
      ingredients: ["Cheese", "Fish", "Chilli"],
      method: ["#1 Frying", "#2 Toppings", "#3 Eat"]
    }
  };

  componentDidMount() {
    console.log(this.state.recipe.burgerName);
    //   axios
    //     .get("")
    //     .then(function(response) {
    //       //handle success})
    //       this.setState({ image: response });
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       // handle error
    //       console.log(error);
    //     });
  }

  render() {
    return (
      <RecipeContainer>
        <div> {this.state.recipe.burgerName} </div>
        <div> {this.state.recipe.userName} </div>
        <RecipeImage src={this.state.recipe.image} />
        <div> {this.state.recipe.likes} </div>
        <ul>
          {this.state.recipe.ingredients.map((recipe) => (
            <li>{recipe}</li>
          ))}
        </ul>
        <ul>
          {this.state.recipe.method.map((method) => (
            <li>{method}</li>
          ))}
        </ul>
      </RecipeContainer>
    );
  }
}

export default Recipe;
