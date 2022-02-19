import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../../hooks/useVideos";

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState("");
  const { videos, search } = useVideos("Tiger");
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);
  const mainVideoSize = window.innerWidth > 1200 ? "eleven" : "sixteen";
  const subVideoSize =
    window.innerWidth > 1200 ? "five wide" : "ten wide centered";
  return (
    <div className="ui container">
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div
            className={`${mainVideoSize} wide column`}
            style={{ marginBottom: "50px" }}
          >
            <VideoDetail video={selectedVideo} />
          </div>
          <div className={`${subVideoSize} column`}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Videos;
