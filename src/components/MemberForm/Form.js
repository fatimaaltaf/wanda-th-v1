import React, { useState } from "react";
import "./Form.css";
import { BitlyClient } from "bitly";
import axios from "axios";

export default function Form(props) {
  const { addMember } = props;

  const [fullName, setFullName] = useState(""); //set default title to empty
  const [website, setWebsite] = useState(""); //set default desc to empty

  //Bitly initialize
  const bitly = new BitlyClient("710b2e0d601a9877cbab4c799abaeea0f1b09625", {});

  async function init(website) {
    let result;
    try {
      result = await bitly.shorten(website);
    } catch (e) {
      throw e;
    }
    return result.link;
  }

  //Handles form onSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //Error handling
    if (!fullName || !website) {
      alert("Please fill out Full name and Website");
      return;
    }

    // axios.get(website).then((response) => console.log("this is...", response));

    //call prop
    console.log("this is the website..", website);

    // Check if user input includes https:// and append if necessary
    let fullURL;
    if (!website.includes("https://")) {
      fullURL = `https://${website}`;
    } else {
      fullURL = website;
    }

    const shortenedURL = await init(fullURL);
    // console.log("this is...", shortenedURL);
    addMember(fullName, shortenedURL);

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
