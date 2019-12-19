import React, { Component } from "react";
import axios from "axios";

class Likes extends Component {
  state = {
    liked: false,
    like_count: 0
  };

  loged_in() {
    if (sessionStorage.getItem("auth")) {
      return true;
    } else {
      return false;
    }
  }

  componentDidMount() {
    this.get_like_count();
    this.check_recipe_liked();
  }

  get_like_count() {
    axios
      .get(`/api/like_recipes?count&recipe=${this.props.recipe_id}`)
      .then(res => {
        this.setState({ like_count: res.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  check_recipe_liked() {
    if (this.loged_in()) {
      const user_id = JSON.parse(sessionStorage.getItem("auth")).userId;
      let data;
      axios
        .get(`/api/like_recipes?user=${user_id}&recipe=${this.props.recipe_id}`)
        .then(res => {
          data = res.data;
          if (data.length > 0) {
            this.setState({
              liked: true
            });
          } else {
            this.setState({
              liked: false
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      this.setState({
        liked: false
      });
    }
  }

  clickHandler = () => {
    if (!this.loged_in()) {
      alert("Login before you can LIKE IT!");
    } else {
      const user_id = JSON.parse(sessionStorage.getItem("auth")).userId;
      const recipe = this.props.recipe_id;
      if (this.state.liked) {
        // dislike it
        axios
          .delete(`/api/like_recipes?user=${user_id}&recipe=${recipe}`)
          .then(res => {
            this.setState({ liked: false });
            this.get_like_count();
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        axios
          .post(`/api/like_recipes?user=${user_id}&recipe=${recipe}`)
          .then(res => {
            this.setState({ liked: true });
            this.get_like_count();
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  };

  render() {
    return (
      <i
        onClick={this.clickHandler}
        className={`${this.state.liked ? "fas" : "far"} fa-thumbs-up fa-lg`}
      >
        {` ${this.state.like_count}`}
      </i>
    );
  }
}

export default Likes;
