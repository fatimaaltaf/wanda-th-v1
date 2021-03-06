import React, { useState } from "react";
import "./Form.css";
import { BitlyClient } from "bitly";
import axios from "axios";

export default function Form(props) {
  const { addMember } = props;

  const [fullName, setFullName] = useState(""); //set default name to empty
  const [website, setWebsite] = useState(""); //set default website to empty

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

  // scrape function connecting to server using axios
  async function dataScrape() {
    let result;
    try {
      result = await axios.get("http://localhost:5000/", {
        params: { url: website },
      });
    } catch (e) {
      throw e;
    }
    return result.data.join(", "); //convert array to string
  }

  //Handles form onSubmit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //Error handling
    if (!fullName || !website) {
      alert("Please fill out Full name and Website");
      return;
    }

    // Check if user input includes https:// and append if necessary
    let fullURL;
    if (!website.includes("http://") || !website.includes("https://")) {
      fullURL = `https://${website}`;
    } else {
      fullURL = website;
    }

    // url shortner
    const shortenedURL = await init(fullURL);

    const scrapedData = await dataScrape();

    // call prop
    addMember(fullName, shortenedURL, scrapedData);

    // Reset form fields
    setFullName("");
    setWebsite("");
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="font-sans block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Full Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="font-sans bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 border-blue-500 border-opacity-75 overflow-hidden shadow-lg"
            id="inline-full-name"
            type="text"
            value={fullName}
            name="Full Name"
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="font-sans block text-blue-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            Website
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="font-sans bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 border-blue-500 border-opacity-75 overflow-hidden shadow-lg"
            id="inline-username"
            type="text"
            value={website}
            name="Website"
            onChange={(event) => setWebsite(event.target.value)}
          />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button
            className="font-sans mr-12 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Create Profile
          </button>
        </div>
      </div>
    </form>
  );
}
