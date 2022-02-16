import SingleBook from "./SingleBook";
import { Col, Container, Row, Form } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <Container>
      <Row>
        {books.map((oneBook) => (
          <Col>
            <SingleBook book={oneBook} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default BookList;

{
  /* <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

</Form> */
}
