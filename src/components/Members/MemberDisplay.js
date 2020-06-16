import React from "react";
import "./MemberDisplay.css";

function Member(props) {
  const { member, scrapedData, index, deleteMember } = props;

  return (
    <div className="bg-white max-w-sm rounded overflow-hidden shadow-lg m-12 mt-5">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">
          {member.fullName}
        </div>
        <p className="text-gray-700 text-base mb-2">
          <b>Member Website:</b>{" "}
          <a className="underline" href={member.shortenedURL}>
            {member.shortenedURL}
          </a>
        </p>
        <p class="text-gray-700 text-base">
          <b>Member Info:</b> {scrapedData}
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
