import React, { useState, useEffect } from "react";

export default function SearchBar(props) {
  const { value, handleChange } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        name="search bar"
        value={value}
        onChange={handleChange}
      ></input>
    </div>
  );
}
