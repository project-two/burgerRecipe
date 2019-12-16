import React from "react";
import CreateRecipeForm from "../CreateRecipe/CreateRecipeForm";
import { navigate } from "@reach/router";
import axios from "axios";

const CreateRecipe = () => {
  const handleCreateRecipe = (e) => {
    console.log("I am called");
    //e.preventDefault(e);
    //   axios
    //     .post(`/to-be-changed`,{
    //       recipe: {
    //         burgerName: data.burgerName,
    //         image: data.image,
    //         ingredients: data.ingredients,
    //         method: data.method
    //       }
    //     })
    //     .then((response) => {
    //       // TODO: If have time, ToastContainer to be used here
    //       alert("recipe successfully created");
    //       // Navigate to the home page.
    //       navigate("/user/:user_id");
    //     });
  };

  const handleCancelCreateRecipe = (e) => {
    console.log("I am click");
    // Navigate to my recipe.
    //navigate("/user/:user_id");
  };
  return (
    <CreateRecipeForm
      onAddRecipeClick={(data) => handleCreateRecipe(data)}
      onCancelClick={(e) => handleCancelCreateRecipe(e)}
    ></CreateRecipeForm>
  );
};

export default CreateRecipe;
