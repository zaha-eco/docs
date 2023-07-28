import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ url }) {
  return (
    <ReactPlayer playing={true} loop={true} width="100%" height="" url={url} />
  );
}
