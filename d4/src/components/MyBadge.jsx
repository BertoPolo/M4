import { Badge } from "react-bootstrap";

const MyBadge = ({ string }) => {
  return (
    <>
      <h2>
        Text <Badge variant="danger">{string}</Badge>
      </h2>
    </>
  );
};

export default MyBadge;
