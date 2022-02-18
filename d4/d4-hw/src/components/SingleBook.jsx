import React from "react";
import CommentArea from "./CommentArea";
import { Card, Col } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col>
        <Card
          style={{
            width: "18rem",
            border: this.state.selected ? "4px solid blue" : "none",
          }}
          className="text-dark"
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>price : {this.props.book.price}</Card.Text>
            <Card.Text>category : {this.props.book.category}</Card.Text>
          </Card.Body>
        </Card>

        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </Col>
    );
  }
}
export default SingleBook;
