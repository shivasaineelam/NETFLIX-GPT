import React from "react";
import { useSelector } from "react-redux";

const BackgroundTitle = () => {
  const backgroundmovie = useSelector((store) => store.movie.nowplaying);
  if (!backgroundmovie) return;
  const background = backgroundmovie[6];

  return (
    <div className="pt-52 pl-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{background.original_title}</h1>
      <h1 className="my-7 w-1/4">{background.overview}</h1>
      <button className="w-28 text-black bg-white p-3 rounded-lg">
        ▶️play
      </button>
      <button className="w-28 m-2 text-white bg-gray-500 bg-opacity-50 p-3 rounded-lg">
        add more
      </button>
    </div>
  );
};

export default BackgroundTitle;
