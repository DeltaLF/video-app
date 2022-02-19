import React, { useState } from "react";
import WikiCard from "./WikiCard";
import SearchBar from "./SearchBar";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const [term, setTerm] = useState("tiger");
  const results = useDebounce(term);

  return (
    <div style={{ margin: "10px" }} className="ui container">
      <SearchBar term={term} onSearchChange={setTerm} />
      <div className="ui container">
        <WikiCard results={results} />
      </div>
    </div>
  );
};

export default Search;
