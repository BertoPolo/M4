import { Card, Button } from "react-bootstrap";
// import books from "../data/horror.json";

const SingleBook = ({ img, title, price, category }) => {
  return (
    <Card style={{ width: "18rem" }} className="mx-3">
      <Card.Img variant="top" src={img} alt="test" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>€{price}</Card.Text>
        <Card.Text>{category}</Card.Text>
        <Button variant="secondary">Buy</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
