import SingleBook from "./SingleBook";
import { Col, Container, Row, Form } from "react-bootstrap";
import React from "react";

class BookList extends React.Component {
  state = {
    searchQuery: "",
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="query">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Filter"
                  value={this.state.searchQuery}
                  onChange={(e) =>
                    this.setState({ searchQuery: e.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          {this.props.books
            .filter((oneBook) =>
              oneBook.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((oneBook) => (
              <SingleBook book={oneBook} key={oneBook.asin} />
            ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
