import React from "react";

const BackgroundVideo = () => {
  return (
    <div className=" w-screen aspect-video ">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/UGc5Tzz19UY?si=ZjaemnyrUTDBOGvA&autoplay=1&mute=1&loop=1&controls=0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
