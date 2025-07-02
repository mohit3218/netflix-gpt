import React from "react";
import { useSelector } from "react-redux";
import useFetchTrailerVideo from "../hooks/useFetchTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useFetchTrailerVideo(movieId);

  return (
    <div className="relative w-full aspect-video">
  <iframe
    className="w-full h-full"
    src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
</div>

  );
};

export default VideoBackground;
