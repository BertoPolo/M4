import { Alert } from "react-bootstrap";

const WarningSign = (prop) => {
  return <Alert variant={"danger"}>{prop.message}</Alert>;
};

export default WarningSign;
