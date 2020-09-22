import React from "react";
import { Card } from "react-bootstrap";
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <Card>
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className={"embed-responsive-item"}
            title="video player"
            src={videoSrc}
          />
        </div>
        <Card.Body>
          <Card.Title>{video.snippet.title}</Card.Title>
          <Card.Text>{video.snippet.description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default VideoDetail;
