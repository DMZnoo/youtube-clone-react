import React from "react";
import { Link, useLocation } from "react-router-dom";
const VideoItem = ({ video, onSelect, bootstrapClass = "" }) => {
  return (
    <div
      className={`card mb-2 ${bootstrapClass}`}
      onClick={() => {
        onSelect(video);
      }}
      style={{ width: "20vw" }}
      id={"card-item"}
    >
      <img
        alt={video.snippet.title}
        className="card-img-top"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="card-body">
        <div className="card-title">
          <Link
            to={{
              pathname: "/watch",
              state: video,
            }}
            style={{ color: "rgba(9, 43, 43 ,0.8)" }}
          >
            {video.snippet.title}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default VideoItem;
