import { useState, useEffect } from "react";
import { fetchWiki } from "../components/apis/fetchData";

const useDebounce = (term) => {
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
  return results;
};

export default useDebounce;
