import { Component } from "react";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNmFlMDgyZWExZDAwMTViYjA0MzciLCJpYXQiOjE2NDUxODcwMTIsImV4cCI6MTY0NjM5NjYxMn0.VQy6LpoOrTdVFjUtEXghH-mOFrriP94TeYT8rSqfRnY",
          },
        }
      );
      console.log(response);
      let comments = await response.json();
      this.setState({ comments: comments });
    } catch (error) {}
  };

  render() {
    return (
      <div>
        <CommentList displayComments={this.state.comments} />
      </div>
    );
  }
}
export default CommentArea;
