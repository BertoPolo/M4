import React from "react";
import CommentArea from "./CommentArea";
import { Card } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <>
        <Card
          /* key={this.props.books.asin} */
          style={{
            width: "18rem",
            border: this.state.selected ? "4px solid blue" : "none",
          }}
          className="text-dark"
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>price : {this.props.price}</Card.Text>
            <Card.Text>category : {this.props.category}</Card.Text>
          </Card.Body>
        </Card>

        {/*  <CommentArea /> */}
      </>
    );
  }
}
export default SingleBook;
