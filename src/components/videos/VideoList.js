import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ videos, onSelect, bootstrapClass = "" }) => {
  const renderList = videos.map((vid, idx) => {
    return (
      <div id={"card-wrapper"}>
        <VideoItem
          bootstrapClass={"col-md-10"}
          key={vid.id.videoId}
          onSelect={onSelect}
          video={vid}
        />
      </div>
    );
  });

  return <div className={bootstrapClass}>{renderList}</div>;
};
export default VideoList;
