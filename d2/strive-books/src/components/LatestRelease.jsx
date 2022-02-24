import books from "../data/romance.json";
import { Card, Container, Row } from "react-bootstrap";

const LatestRelease = () => {
  return (
    <Container>
      <Row>
        {books.map((book) => (
          <div key={book.asin}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default LatestRelease;
