import React from "react";
import CreateRecipeForm from "../CreateRecipe/CreateRecipeForm";
import { navigate } from "@reach/router";
import axios from "axios";
import ImageUpload from 'react-images-upload'


const CreateRecipe = () => {
  const handleCreateRecipe = (e, data) => {
    e.preventDefault();
    axios
      .post(`/api/recipes`, {
        recipe: {
          burgerName: data.burgerName,
          image: data.image,
          ingredients: data.ingredients,
          method: data.method
        }
      })
      .then((response) => {
        // TODO: If have time, ToastContainer to be used here
        alert("recipe successfully created");
        // Navigate to the home page.
        navigate("/user/:user_id");
      });
  };

  return <CreateRecipeForm onAddRecipeClick={handleCreateRecipe} />;
};

export default CreateRecipe;
