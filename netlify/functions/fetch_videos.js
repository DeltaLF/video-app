const axios = require("axios");
const KEY = process.env.YOUTUBE_KEY;

exports.handler = async function (event, context) {
  const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { part: "snippet", maxResults: 5, key: KEY, type: "video" },
  });
  try {
    const { term } = event.queryStringParameters;
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    return { statusCode: 200, body: JSON.stringify({ data: response.data }) };
  } catch (err) {
    return {
      statusCode: 404,
      body: err.toString(),
    };
  }
};
