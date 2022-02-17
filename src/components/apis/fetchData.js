import axios from "axios";

export const fetchWiki = axios.create({
  baseURL: "https://en.wikipedia.org",
  params: {
    action: "query",
    list: "search",
    origin: "*",
    format: "json",
  },
});
