import books from "../data/romance.json";
import { Container, Row, Col } from "react-bootstrap";

const LatestRelease = () => (
  <Container>
    <Row className="bg-dark justify-content-center mt-3">
      {books.map((book) => (
        <div className="img-container" key={book.asin}>
          <Col xs={12} md={3}>
            <img
              className="d-block img-fluid img"
              src={book.img}
              alt={book.title}
            />
          </Col>
        </div>
      ))}
    </Row>
  </Container>
);

export default LatestRelease;
