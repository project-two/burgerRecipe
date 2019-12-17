import React, { Component } from "react";

class CreateRecipeForm extends Component {
  state = {
    create_recipe_form: {
      burgerName: "",
      image: "",
      ingredients: [],
      method: []
    }
  };
  render() {
    return <div>Helo Form</div>;
  }
}

export default CreateRecipeForm;
