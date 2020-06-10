import React from "react";

function Member(props) {
  // &nbsp;
  const { member, index, deleteMember } = props;

  return (
    <div className="profile">
      <p>Member Name:{member.fullName}</p>
      <p>Member Website: {member.website}</p>
      <p>Shortened URL: shortened url here</p>
      <p>More Info: website headings here</p>

      <button className="delete" onClick={() => deleteMember(index)}>
        Delete
      </button>
    </div>
  );
}

export default Member;
