import React from "react";
import { Table } from "react-bootstrap";

import AddPerson from "./Add";

const person = [
  {
    key: "cc2ed8fd-4364-4c69-b7a0-ce1f65ccb716",
    name: "Antonio Nicasio",
    email: "antonio.nicasio.herrera@gmail.com",
    role: "Software Engineer",
  },
  {
    key: "cfbeb977-cd76-460c-824c-e95ff6c12afd",
    name: "Juan Peréz",
    email: "juanitoperez@gmail.com",
    role: "QA Engineer",
  },
  {
    key: "4d5ceb30-fd3b-4a95-a149-dab5ff0d895f",
    name: "John Doe",
    email: "johndoe@gmail.com",
    role: "Software Developer",
  },
];

function Person() {
  return (
    <>
      <div className="mt-5">
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
            {person.map((persona) => (
              <tr key={persona.key}>
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
      </div>
      <AddPerson />
    </>
  );
}

export default Person;
