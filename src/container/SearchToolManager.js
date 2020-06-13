import React, { useState, useEffect } from "react";
import Form from "../components/MemberForm/Form";
import Member from "../components/Members/MemberDisplay";
import SearchBar from "../components/SearchBar/SearchBar";
import "./SearchToolManager.css";

export default function SearchToolManager() {
  const [memberList, setMemberList] = useState([
    {
      fullName: "Fatima Altaf",
      shortenedURL: "https://bit.ly/3dTawUx",
      headings: "Web Developer Extraordinaire",
    },
    {
      fullName: "Ahmed Dauda",
      shortenedURL: "https://bit.ly/37ounZa",
      headings: "Black Panther",
    },
  ]);

  const [wordInput, setWordInput] = useState("");
  const [filterDisplay, setFilterDisplay] = useState([]);

  // Add a new member to array
  const addMember = (fullName, shortenedURL, headings) => {
    const newMember = [...memberList, { fullName, shortenedURL, headings }];
    setMemberList(newMember);
  };

  // Removes a member from array
  const deleteMember = (index) => {
    const newMember = [...memberList];
    newMember.splice(index, 1);
    setMemberList(newMember);
  };

  // Search Filter functionality
  // handleChange runs each time there is change in filter search input
  const handleChange = (e) => {
    setWordInput(e);
  };

  useEffect(() => {
    // convert to lowercase given user input may be in any format
    // return matching results as an array of objects to hold changed list
    if (wordInput !== "") {
      const matchingList = memberList.filter((member) => {
        const lowercase = member.headings.toLowerCase();
        return lowercase.includes(wordInput.toLowerCase());
      });
      console.log("matches", matchingList);
      setFilterDisplay(matchingList);
    } else {
      setFilterDisplay([]);
    }
  }, [memberList, wordInput]);

  return (
    <div className="App">
      <h1 className="name-title">
        <img
          className="centered"
          alt="Magnifying class icon"
          src="https://img.icons8.com/clouds/100/000000/zoom-out.png"
        />
        Expertz
      </h1>
      <h3 className="pb-5 text-lg">Directory Search Tool</h3>
      <div className="profile-list-section">
        <p className="subtitle">Add a Profile</p>
        <Form addMember={addMember} />
      </div>
      <div className="search-bar-section">
        <p className="subtitle">Search Profiles</p>
        <SearchBar
          handleChange={(e) => setWordInput(e.target.value)}
          value={wordInput}
        />
      </div>
      <div className="members-list">
        <h3 className="subtitle">Member Profiles</h3>
        {memberList.length ? (
          (!filterDisplay.length && !wordInput.length
            ? memberList
            : filterDisplay
          ).map((member, index) => (
            <Member
              key={index}
              index={index}
              member={member}
              headings={member.headings}
              deleteMember={deleteMember}
            />
          ))
        ) : (
          <p className="clear-member-message">Please add a Member</p>
        )}
      </div>
      <div class="footer">
        <p></p>
      </div>
    </div>
  );
}
