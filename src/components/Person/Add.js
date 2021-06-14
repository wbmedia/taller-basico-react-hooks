import React, { useState } from "react";
import FormPerson from "./Form";
import db from "../../../services/firebase";

function AddPerson() {
  const [currentId, setCurrentId] = useState("");

  const addOrEditPerson = async (linkObject) => {
    try {
      if (currentId == "") {
        await db.collection("persons").doc().set(linkObject);
      } else {
        await db.collection("persons").doc(currentId).update(linkObject);
        setCurrentId("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <FormPerson {...{ addOrEditPerson, currentId }} />
    </div>
  );
}

export default AddPerson;
