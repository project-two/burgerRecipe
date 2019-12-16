import React, { Component } from "react";
import { TextArea } from "semantic-ui-react";
import ImageUploader from "react-images-upload";
import "bootstrap/dist/css/bootstrap.css";

class CreateRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerName: "",
      image: [],
      ingredients: "",
      method: ""
    };

    this.handleBurgerNameChange = this.handleBurgerNameChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleMethodChange = this.handleMethodChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  //This function is not working because import @reach/router is not working
  //in CreateRecipe folder
  onCancelClick() {
    this.props.onCancelClick(this.state);
  }

  //This function is not working because import @reach/router is not working
  //in CreateRecipe folder
  // onAddRecipeClick() {
  //   // TODO: validate inputs
  //   this.props.onAddRecipeClick(this.state);
  // }

  handleBurgerNameChange(e) {
    this.setState({ burgerName: e.target.value });
  }

  handleIngredientChange(e) {
    this.setState({ ingredients: e.target.value });
  }

  handleMethodChange(e) {
    this.setState({ method: e.target.value });
  }

  onDrop(image) {
    this.setState({
      image: this.state.pictures.concat(image)
    });
  }

  handleSubmit = (e) => {
    console.log(
      "A recipe was submitted: " +
        this.state.burgerName +
        this.state.ingredients +
        this.state.method
    );
    event.preventDefault();
  };

  render() {
    let { burgerName, image, ingredients, method } = this.state;
    return (
      <div className="container">
        <h1>Add new recipe</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h4>
              <label htmlFor="burgerName">Burger Name</label>
            </h4>
            <input
              style={{ width: "380px" }}
              type="text"
              className="form-control"
              placeholder="Enter burger name"
              name="burgerName"
              required
              value={burgerName}
              onChange={this.handleBurgerNameChange}
            />
          </div>
          <div className="form-group">
            <ImageUploader
              style={{ width: "380px" }}
              withIcon={true}
              buttonText="Choose images"
              value={image}
              onChange={this.onDrop}
              imgExtension={[".jpg", ".gif", ".png", ".gif"]}
              maxFileSize={5242880}
            />
          </div>
          <div className="form-group">
            <h4>Ingredients</h4>
            <TextArea
              rows={4}
              placeholder="Add ingredients..."
              style={{ minHeight: 200, width: "380px" }}
              className="form-control"
              name="ingredients"
              required
              value={ingredients}
              onChange={this.handleIngredientChange}
            />
          </div>

          <div className="form-group">
            <h4>Method</h4>
            <TextArea
              rows={4}
              placeholder="Add method..."
              style={{ minHeight: 200, width: "380px" }}
              required
              value={method}
              onChange={this.handleMethodChange}
            />
          </div>

          <div className="clearfix">
            <button type="button" onCancel={() => this.onCancelClick()}>
              Cancel
            </button>
            <button type="submit">Add recipe</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateRecipeForm;
