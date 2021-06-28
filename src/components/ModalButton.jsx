import React from "react"
import AddLink from "./AddLink";
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalButton(props) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add a Link+
      </Button>

      <AddLink
        show={modalShow}
        onHide={() => setModalShow(false)}
        {...props}
      />
    </>
  );

}

