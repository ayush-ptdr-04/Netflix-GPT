import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="text-lg py-6 w-1/4">{overview}</p>
      <div>
        <button className="p-4 px-12 text-xl bg-gray-500 opacity-50 text-white rounded-lg">
          ▶️ Play
        </button>
        <button className="mx-2 p-4 px-12 text-xl bg-gray-500 opacity-50 text-white rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
