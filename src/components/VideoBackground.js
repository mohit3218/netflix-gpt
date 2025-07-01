import React from "react";
import { useSelector } from "react-redux";
import useFetchTrailerVideo from "../hooks/useFetchTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useFetchTrailerVideo(movieId);

  return (
    <div className="w-full">
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        auto
      ></iframe>
    </div>
  );
};

export default VideoBackground;
