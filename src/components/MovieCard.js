import React from "react";
import { IMG_URL_CDN } from "../utlis/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="min-w-[150px] max-w-[150px] h-[225px] sm:min-w-[180px] sm:max-w-[180px] sm:h-[270px] mx-2 flex-shrink-0">
      <img
        src={IMG_URL_CDN + posterPath}
        alt="Movie Poster"
        className="w-full h-full object-cover rounded-md shadow-md"
      />
    </div>
  );
};

export default MovieCard;
