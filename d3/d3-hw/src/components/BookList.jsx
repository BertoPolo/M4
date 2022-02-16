import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";

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
