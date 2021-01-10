import React from "react";
import { Form, Button } from "react-bootstrap";

function FormPerson() {
  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Person Name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="email" placeholder="Person Email" />
        </Form.Group>
        <Form.Label>Example select</Form.Label>
        <Form.Control as="select">
          <option>Software Engineer</option>
          <option>QA Engineer</option>
          <option>Software Developer</option>
          <option>Web Developer</option>
          <option>Graphic Designer</option>
        </Form.Control>
        <Button color="primary" className="mt-2">
          Save Person
        </Button>
      </Form>
    </div>
  );
}

export default FormPerson;
