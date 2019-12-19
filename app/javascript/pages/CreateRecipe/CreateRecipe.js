import React from "react";
import axios from "axios";

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: "",
      instructions: [''],
      ingredients: [
        {
          qty: "",
          unit: "spoon",
          name: ""
        }
      ]
    };
  }

  addIngredient = e => {
    let ingrediends = this.state.ingredients;
    ingrediends.push({
      qty: "",
      unit: "spoon",
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
    const user_id = JSON.parse(sessionStorage.getItem("auth")).userId;
    let state = this.state
    state["user_id"] = user_id
    axios.post(`/api/recipes`, { state })
      .then(res => {
        console.log(res);
      })
    e.preventDefault();
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name.split('_');
    let state = this.state
    if (name[0] === "recipe") {
      this.setState({
        [name[0]]: value
      });
    } else if (name[0] === "ingrd") {
      if (name[1] === "qty") {
        state.ingredients[name[2]].qty = value
      } else if (name[1] === "unit") {
        state.ingredients[name[2]].unit = value
      } else {
        state.ingredients[name[2]].name = value
      }
      this.setState({
        ingredients: state.ingredients
      });
    } else if (name[0] === "step") {
      state.instructions[name[1]] = value
      this.setState({
        instructions: state.instructions
      });
    }
    
  }

  render() {
    let ingredients = this.state.ingredients;
    let instructions = this.state.instructions;
    return (
      <div>
        <div>This is create Recipe Page</div>
        <form onSubmit={this.handleSubmit}>
          <div>Name</div>
          <input type="text" name="recipe" onChange={this.handleChange}/>
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
                    <td>{idx+1}</td>
                    <td>
                      <input type="text" name={`ingrd_qty_${idx}`} onChange={this.handleChange}/>
                    </td>
                    <td>
                      <select name={`ingrd_unit_${idx}`} value="spoon" onChange={this.handleChange}>
                        <option value="spoon">spoon</option>
                        <option value="gram">gram</option>
                        <option value="whatever">whatever</option>
                      </select>
                    </td>
                    <td>
                      <input type="text" name={`ingrd_text_${idx}`} onChange={this.handleChange}/>
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
                  <tr key={`step_${idx+1}`}>
                    <td>{idx}</td>
                    <td>
                    <input type="text" name={`step_${idx}`} onChange={this.handleChange}/>
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
