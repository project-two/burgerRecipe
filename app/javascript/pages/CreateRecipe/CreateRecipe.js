import React from "react";
import CreateRecipeForm from "../CreateRecipe/CreateRecipeForm";
import axios from "axios";

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        name: "",
      },
      instructions: [''],
      ingredients: [
        {
          qty: "",
          unit: "",
          name: ""
        }
      ]
    };
  }

  addIngredient = e => {
    let ingrediends = this.state.ingredients;
    ingrediends.push({
      qty: "",
      unit: "",
      name: ""
    });
    this.setState({
      ingredients: ingrediends
    });
    e.preventDefault();
  };

  dropIngredient = e => {
    let ingrediends = this.state.ingredients;
    ingrediends.pop();
    this.setState({
      ingredients: ingrediends
    });
    e.preventDefault();
  };

  addStep = e => {
    let instructions = this.state.instructions;
    instructions.push('');
    this.setState({
      instructions: instructions
    });
    e.preventDefault();
  };

  dropStep = e => {
    let instructions = this.state.instructions;
    instructions.pop();
    this.setState({
      instructions: instructions
    });
    e.preventDefault();
  };

  handleSubmit = e => {
    console.log(e)
    e.preventDefault();
  }

  render() {
    let ingredients = this.state.ingredients;
    let instructions = this.state.instructions;
    return (
      <div>
        <div>This is create Recipe Page</div>
        <form onSubmit={this.handleSubmit}>
          <div>Name</div>
          <input type="text" name="name" />
          <div>Ingredients</div>
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
              {ingredients.map((ingredient, idx) => {
                return (
                  <tr key={`ingrd_${idx}`}>
                    <td>{idx}</td>
                    <td>
                      <input type="text" name={`ingrd_qty_${idx}`} />
                    </td>
                    <td>
                      <select>
                        <option value="spoon">spoon</option>
                        <option value="gram">gram</option>
                        <option value="whatever">whatever</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" name={`ingrd_unit_${idx}`} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={this.addIngredient}>+</button>
          <button onClick={this.dropIngredient}>-</button>
          <div>Steps</div>
          <table>
            <thead>
              <tr>
                <td>#</td>
                <td>Instruction</td>
              </tr>
            </thead>
            <tbody>
              {instructions.map((step, idx) => {
                return (
                  <tr key={`step_${idx}`}>
                    <td>{idx}</td>
                    <td>
                    <input type="text" name={`step_${idx}`} />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <button onClick={this.addStep}>+</button>
          <button onClick={this.dropStep}>-</button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateRecipe;
