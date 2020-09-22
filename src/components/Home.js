import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar";
import youtube from "./youtube";
import VideoList from "./videos/VideoList";
//get your YOUR_API_KEY from developer google console
import {REACT_APP_API_KEY} from process.env;


const Home = () => {
  const [isVideo, SetVideo] = useState({ videos: [], selectedVideo: null });

  useEffect(() => {
    onSubmit("buildings");
  }, []);

  const onSubmit = async (term) => {
    const response = await youtube
      .get("/search", {
        params: {
          q: term,
          part: "snippet",
          maxResults: 20,
          type: "video",
          key: KEY,
        },
      })
      .catch((err) => console.log(err));
    SetVideo({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  const onSelect = (video) => {
    SetVideo({ videos: isVideo.videos, selectedVideo: video });
  };

  return (
    <div className="container">
      <NavigationBar onFormSubmit={onSubmit} />
      <div className="container">
        <VideoList
          bootstrapClass={"row hidden-md-up"}
          onSelect={onSelect}
          videos={isVideo.videos}
        />
      </div>
    </div>
  );
};

export default Home;
