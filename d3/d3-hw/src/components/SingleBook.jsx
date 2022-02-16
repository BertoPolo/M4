import { Card } from "react-bootstrap";

const SingleBook = ({ book }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="text-dark">
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>price : {book.price}</Card.Text>
          <Card.Text>category : {book.category}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default SingleBook;
