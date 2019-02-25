import React from "react";
import VideoItem from "./VideoItem";
import { CardColumns } from "reactstrap";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <CardColumns>{renderedList}</CardColumns>;
};

export default VideoList;
