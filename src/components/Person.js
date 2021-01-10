import React from "react";

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
    <div>
      {person.map((persona) => (
        <ul key={persona.key}>
          <li>
            <h4>{persona.name}</h4>
            <p>{persona.email}</p>
            <p>{persona.role}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Person;
