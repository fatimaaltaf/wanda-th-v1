import React, { useState } from "react";
import "./Form.css";

export default function Form(props) {
  const { addMember } = props;

  const [fullName, setFullName] = useState(""); //set default title to empty
  const [website, setWebsite] = useState(""); //set default desc to empty

  //Handles form onSubmit
  const handleSubmit = (event) => {
    event.preventDefault();

    //Error handling
    if (!fullName || !website) {
      alert("Please fill out Full name and Website");
      return;
    }

    //call prop
    addMember(fullName, website);

    // Reset form fields
    setFullName("");
    setWebsite("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span>Full Name:</span>
      <input
        type="text"
        value={fullName}
        name="Full Name"
        onChange={(event) => setFullName(event.target.value)}
      />
      <span>Website:</span>
      <input
        type="text"
        value={website}
        name="Website"
        onChange={(event) => setWebsite(event.target.value)}
      />
      <button className="add-profile" type="submit">
        Add Profile{" "}
      </button>
    </form>
  );
}
