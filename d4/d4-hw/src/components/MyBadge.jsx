import { Badge } from "react-bootstrap";

const MyBadge = ({ text, color }) => {
  return (
    <>
      <h3>
        Example heading <Badge variant={color}>{text}</Badge>
      </h3>
    </>
  );
};
export default MyBadge;
