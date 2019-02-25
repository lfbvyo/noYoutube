import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const truncateWithEllipses = (text, max) =>
  text.substr(0, max - 1) + (text.length > max ? "..." : "");

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Card onClick={() => onVideoSelect(video)}>
      <CardImg
        top
        width="100%"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <CardBody>
        <CardTitle>
          <strong>{video.snippet.title}</strong>
        </CardTitle>
        <CardText>
          {truncateWithEllipses(video.snippet.description, 125)}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default VideoItem;
