import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black pt-[15%] px-20 absolute text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div>
        <button className="p-4 px-12 text-xl bg-white  text-black rounded-lg hover:opacity-80">
          ▶️ Play
        </button>
        <button className="mx-2 p-4 px-12 text-xl bg-gray-500 opacity-60 hover:opacity-90 text-white rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
