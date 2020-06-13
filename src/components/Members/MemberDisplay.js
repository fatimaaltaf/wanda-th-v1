import React from "react";
import "./MemberDisplay.css";
function Member(props) {
  const { member, headings, index, deleteMember } = props;

  return (
    <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg m-12 mt-5">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-center">{member.fullName}</div>
        <p class="text-gray-700 text-base mb-2">
          <b>Member Website:</b>{" "}
          <a className="underline" href={member.shortenedURL}>
            {member.shortenedURL}
          </a>
        </p>
        <p class="text-gray-700 text-base">
          <b>Member Info:</b> {headings}
        </p>
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => deleteMember(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Member;
