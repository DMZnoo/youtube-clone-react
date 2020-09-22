import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import { useLocation } from "react-router";
import youtube from "./youtube";
import VideoList from "./videos/VideoList";
import VideoDetail from "./videos/VideoDetails";
//get your YOUR_API_KEY from developer google console
import {REACT_APP_API_KEY} from process.env;


const Watch = () => {
  const location = useLocation();
  const [isVideo, SetVideo] = useState({ videos: [], selectedVideo: null });

  useEffect(() => {
    if (location.state === undefined) {
      const currPage = localStorage.getItem("CurrentPage");
      onTermSubmit(currPage);
    } else {
      onTermSubmit(location.state.snippet.title);
      localStorage.setItem("CurrentPage", location.state.snippet.title);
    }
  }, []);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    SetVideo({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  const onVideoSelect = (video) => {
    SetVideo({ videos: isVideo.videos, selectedVideo: video });
  };

  return (
    <div className="container">
      <NavigationBar onFormSubmit={onTermSubmit} />
      <div className="row">
        <div className="col">
          <VideoDetail video={isVideo.selectedVideo} />
        </div>
        <div className="col-auto">
          <VideoList onSelect={onVideoSelect} videos={isVideo.videos} />
        </div>
      </div>
    </div>
  );
};
export default Watch;
