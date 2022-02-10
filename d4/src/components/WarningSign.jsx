import { Alert } from "react-bootstrap"

const WarningSign = ({ message }) => {
  return <Alert variant="danger">{message}</Alert>
}

export default WarningSign
