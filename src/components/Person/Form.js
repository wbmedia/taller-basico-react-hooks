import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function FormPerson({ ...props }) {
  const initialState = {
    name: "",
    email: "",
    role: "",
  };

  const [values, setValues] = useState(initialState);

  const handleSumbit = (e) => {
    e.preventDefault();
    props.addOrEditPerson(values);
    setValues({ ...initialState });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Person Name"
            name="name"
            onChange={handleInputChange}
            value={values.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Person Email"
            name="email"
            onChange={handleInputChange}
            value={values.email}
          />
        </Form.Group>
        <Form.Label>Example select</Form.Label>
        <Form.Control
          as="select"
          name="role"
          onChange={handleInputChange}
          value={values.role}
        >
          <option>Software Engineer</option>
          <option>QA Engineer</option>
          <option>Software Developer</option>
          <option>Web Developer</option>
          <option>Graphic Designer</option>
        </Form.Control>
        <Button onClick={handleSumbit} color="primary" className="mt-2">
          Save Person
        </Button>
      </Form>
    </div>
  );
}

export default FormPerson;
