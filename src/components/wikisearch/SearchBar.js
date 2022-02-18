import React from "react";

const SearchBar = ({ term, onSearchChange }) => {
  return (
    <div className="ui form">
      <div className="field">
        <h1>
          <label htmlFor="">Enter Search Term</label>
        </h1>
        <input
          type="text"
          className="input"
          value={term}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
