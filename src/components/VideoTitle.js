import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white rounded-lg text-black p-4 px-12 text-xl hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 bg-white rounded-lg text-black p-4 px-12 text-xl hover:bg-opacity-80">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
