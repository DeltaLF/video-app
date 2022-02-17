import React, { useState, useEffect } from "react";
import { fetchWiki } from "../apis/fetchData";
import WikiCard from "./WikiCard";
const Search = () => {
  const [term, setTerm] = useState("tiger");
  const [debouncedTerm, setdebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);
  useEffect(() => {
    const search = async () => {
      const { data } = await fetchWiki.get("/w/api.php", {
        params: { srsearch: debouncedTerm },
      });
      setResults(data.query.search);
    };

    search();
  }, [debouncedTerm]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (term) {
        setdebouncedTerm(term);
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  return (
    <div style={{ margin: "10px" }}>
      <div className="ui form">
        <div className="field">
          <h1>
            <label htmlFor="">Enter Search Term</label>
          </h1>

          <input
            type="text"
            className="input"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
      <WikiCard results={results} />
    </div>
  );
};

export default Search;
