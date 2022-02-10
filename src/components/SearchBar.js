import React, { useState, useEffect } from "react";

const SearchBar = ({ onTermSubmit }) => {
  useEffect(() => {
    console.log("useEffect in Search Bar []");
  }, []);
  const [term, setTerm] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} action="" className="ui form">
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
