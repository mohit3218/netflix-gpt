import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full min-h-[60vh] sm:aspect-video px-4 sm:px-6 md:px-12 pt-[50%] sm:pt-[30%] md:pt-[20%] lg:pt-[10%] absolute text-white bg-gradient-to-r from-black z-10">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
        {title}
      </h1>

      <p className="py-4 text-sm sm:text-base md:text-lg w-full sm:w-5/6 md:w-1/2 lg:w-1/3 line-clamp-3">
        {overview}
      </p>

      <div className="flex flex-wrap gap-3">
        <button className="bg-white text-black rounded-lg text-sm sm:text-base py-2 px-4 sm:px-6 md:px-10 hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-white text-black rounded-lg text-sm sm:text-base py-2 px-4 sm:px-6 md:px-10 hover:bg-opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
