import React from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';


export default function Link(props) {
  return (


    <div style={{ width: '25%', display: 'inline-block' }}>
      <Col style={{ margin: '0rem 0rem 2rem 0rem' }}>
        <Card key={props.link.id}>
          <Card.Body>
            <Card.Title>Name: {props.link.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Tags:</Card.Subtitle>
            <Card.Text>
              {props.link.tags.map((tag, index) => {
                return <li style={{ listStyleType: "none" }} key={index}>#{tag}</li>
              }
              )}
            </Card.Text>
            <Card.Link href="{props.link.url}">{props.link.url}</Card.Link>
          </Card.Body>
        </Card>
      </Col >
    </div>





  )
}

