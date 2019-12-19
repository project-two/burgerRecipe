import React from "react";
import Axios from "axios";

class Likes extends React.Component {
  render() {
    return (
      <i onClick={this.props.onClick} className="far fa-thumbs-up fa-lg">
        {this.props.likeCount}
      </i>
    );
  }
}

export default Likes;
