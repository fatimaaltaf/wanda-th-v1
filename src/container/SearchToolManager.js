import React, { useState } from "react";
import Form from "../components/MemberForm/Form";
import Member from "../components/Members/MemberDisplay";
import "./SearchToolManager.css";

export default function SearchToolManager() {
  const [memberList, setMemberList] = useState([
    {
      fullName: "Fatima Altaf",
      website: "www.google.com",
    },
  ]);

  // Add a new task to array
  const addMember = (fullName, website) => {
    const newMember = [...memberList, { fullName, website }];
    setMemberList(newMember);
  };

  // Removes a task from array
  const deleteMember = (index) => {
    const newMember = [...memberList];
    newMember.splice(index, 1);
    setMemberList(newMember);
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
      <div className="member-list">
        <h3>Member Profiles</h3>
        {memberList.length ? (
          memberList.map((member, index) => (
            <Member
              key={index}
              index={index}
              member={member}
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
