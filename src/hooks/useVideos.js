import { useState, useEffect } from "react";
import axios from "axios";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await axios.get(
      `/.netlify/functions/fetch_videos?term=${term}`
      //make request from netlify
    );
    setVideos(response.data.data.items);
  };

  return { videos, search };
};
export default useVideos;
