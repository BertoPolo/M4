import { ListGroup, ListGroupItem } from "react-bootstrap";

const ComentList = (displayComments) => (
  <ListGroup>
    {displayComments.map((comment) => (
      <ListGroupItem key={comment._id}>{comment.comment}</ListGroupItem>
    ))}
  </ListGroup>
);
export default ComentList;
