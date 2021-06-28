import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function AddLink(props) {
  // const [props.show, setShow] = useState(false);

  // const { onFormSubmit, titleOnChange, urlOnChange, title, url, tags, tagsOnChange, ...rest } = props
  // console.log("PROPS", rest)
  return (
    <div>
      <Modal
        // {...rest}
        show={props.show}
        onHide={props.handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton onClick={props.onHide}>
          <Modal.Title id="contained-modal-title-vcenter">
            Add a link
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Fill out the form</h4>
          {/* ******************************* */}
          <Form onSubmit={props.onFormSubmit}>
            <Form.Group className="mb-3" >

              <Form.Label>Title</Form.Label>
              <Form.Control name="title" onChange={props.titleOnChange} type="text" placeholder="Enter name" value={props.title} />

              <Form.Label>URL</Form.Label>
              <Form.Control name="url" onChange={props.urlOnChange} type="text" placeholder="www." value={props.url} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Tags</Form.Label>
              <Form.Control name="tags" onChange={props.tagsOnChange} type="text" placeholder="Enter Tags" value={props.tags} />
            </Form.Group>

            <Button variant="primary" type="submit" data-dismiss="modal" onClick={props.onHide}  >
              Submit
            </Button>
          </Form>
          {/* ******************************* */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}



