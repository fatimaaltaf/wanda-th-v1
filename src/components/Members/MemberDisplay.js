import React from "react";

function Member(props) {
  // &nbsp;
  const { member, headings, index, deleteMember } = props;

  return (
    <div className="profile">
      <p>Member Name:{member.fullName}</p>
      <p>
        Member Website: <a href={member.shortenedURL}>{member.shortenedURL}</a>
      </p>
      <p>Member info: {headings}</p>

      <button className="delete" onClick={() => deleteMember(index)}>
        Delete
      </button>
    </div>
  );
}

export default Member;
