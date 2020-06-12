import React, { useState, useEffect } from "react";

export default function SearchBar(props) {
  const { value, handleChange } = props;
  return (
    <div class="w-full max-w-xs">
      <input
        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 ml-40 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 border-blue-500 border-opacity-75"
        type="text"
        placeholder="Search..."
        name="search bar"
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
