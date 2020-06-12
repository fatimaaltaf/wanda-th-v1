import React, { useState } from "react";
import Form from "../components/MemberForm/Form";
import Member from "../components/Members/MemberDisplay";
import SearchBar from "../components/SearchBar/SearchBar";
import "./SearchToolManager.css";
// import { BitlyClient } from "bitly-react";

export default function SearchToolManager() {
  const [memberList, setMemberList] = useState([
    {
      fullName: "Fatima Altaf",
      shortenedURL: "www.google.com",
      headings: "Baker - Baked pies and cakes for your every occassion",
    },
    {
      fullName: "Maliha Hossain",
      shortenedURL: "www.malihahossain.com",
      headings: "Software Dev Extraordinaire",
    },
  ]);

  const [wordInput, setWordInput] = useState("");
  const [filterDisplay, setFilterDisplay] = useState("");

  // Add a new member to array
  const addMember = (fullName, shortenedURL) => {
    const newMember = [...memberList, { fullName, shortenedURL }];
    setMemberList(newMember);
  };

  // Removes a member from array
  const deleteMember = (index) => {
    const newMember = [...memberList];
    newMember.splice(index, 1);
    setMemberList(newMember);
  };

  // handleChange runs each time there is change in filter search input
  const handleChange = (e) => {
    setWordInput(e);

    // convert to lowercase given user input may be in any format
    // return oldList as an array of objects to hold changed list
    let oldList = memberList.map((member) => {
      console.log("THIS IS...", member.headings);
      return {
        // fullName: member.fullName.toLowerCase(),
        // website: member.website.toLowerCase(),
        headings: member.headings.toLowerCase(),
      };
    });

    if (wordInput !== "") {
      let newList = [];

      // array of profiles that meet search criteria
      newList = oldList.filter((member) =>
        member.headings.includes(wordInput.toLowerCase())
      );
      setFilterDisplay(newList);
    } else {
      setFilterDisplay(memberList);
    }
  };

  return (
    <div className="App">
      <h1 className="name-title">
        <img
          alt="Magnifying class icon"
          src="https://img.icons8.com/clouds/100/000000/zoom-out.png"
        />
        Expertz
      </h1>
      <h3>Directory Search Tool</h3>
      <div className="member-list-section">
        <Form addMember={addMember} />
      </div>
      <p>Search Profiles</p>
      <SearchBar
        handleChange={(e) => handleChange(e.target.value)}
        value={wordInput}
      />
      <div className="member-list">
        <h3>Member Profiles</h3>
        {memberList.length ? (
          memberList.map((member, index) => (
            <Member
              key={index}
              index={index}
              member={wordInput.length < 1 ? member : filterDisplay}
              headings={member.headings}
              deleteMember={deleteMember}
            />
          ))
        ) : (
          <p className="clear-member-message">Please add a Member</p>
        )}
      </div>
    </div>
  );
}
