import { Button, Modal } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import db from "../../../services/firebase";
import "./../../App.css";

import AddPerson from "./Add";

function Person() {
  const [persons, setPersons] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getPersonsFromDb = async () => {
    try {
      db.collection("persons").onSnapshot((querySnapshot) => {
        const personCollection = [];
        querySnapshot.forEach((person) => {
          personCollection.push({ ...person.data(), id: person.id });
        });
        setPersons(personCollection);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPersonsFromDb();
    return () => {};
  }, []);
  return (
    <div>
      <div className="mt-5">
        {persons.length === 0 ||
        persons.length === [] ||
        persons.length === undefined ? (
          <h2 className="text-center">Cargando ....</h2>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {persons.map((persona) => (
                <tr key={persona.id}>
                  <td>{persona.name}</td>
                  <td>{persona.email}</td>
                  <td>{persona.role}</td>
                  <td>
                    <a className="btn btn-warning mr-1">Edit</a>
                    <a className="btn btn-danger">Delete</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>

      <Button variant="primary" onClick={handleShow}>
        Add New Person
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>
          <AddPerson />
          <Button
            className="mr-1 button-cancel"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Person;
