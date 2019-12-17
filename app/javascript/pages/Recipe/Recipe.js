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
    recipe: {
      burgerName: "The Pace Maker",
      userName: "Kay",
      image:
        "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80",
      likes: 150,
      ingredients: ["Cheese", "Fish", "Chilli"],
      method: ["Frying", "Toppings", "Eat"]
    },

    liked: false
  };

  componentDidMount() {
    
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

  likeVoteHandler = () => {
    !this.state.liked
      ? this.setState({ liked: true })
      : this.setState({ liked: false });

    const currentNumberOfLikes = this.state.recipe.likes;
    this.setState(prevState => ({
      recipe: { ...prevState.recipe, likes: currentNumberOfLikes + 1 }
    }));
  };

  render() {
    return (
      <RecipeContainer>
        <PostDetailsContainer>
          <BurgerName> {this.state.recipe.burgerName} </BurgerName>
          <p>by {this.state.recipe.userName} </p>
          <RecipeImage src={this.state.recipe.image} />
          <LikesContainer onClick={this.likeVoteHandler}>
            {!this.state.liked ? (
              <i className="far fa-thumbs-up fa-lg"></i>
            ) : (
              <i className="fas fa-thumbs-up fa-lg"></i>
            )}
            <span> {this.state.recipe.likes} </span>
          </LikesContainer>
        </PostDetailsContainer>
        <PostMethodContainer>
          <RecipeHeading>Ingredients</RecipeHeading>
          <div>
            {this.state.recipe.ingredients.map(recipe => (
              <p>{recipe}</p>
            ))}
          </div>
          <RecipeHeading>Method</RecipeHeading>
          <div>
            {this.state.recipe.method.map(method => (
              <p>{method}</p>
            ))}
          </div>
        </PostMethodContainer>
      </RecipeContainer>
    );
  }
}

export default Recipe;
