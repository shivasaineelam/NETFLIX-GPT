import React from "react";

const MovieList = ({ poster_path, title }) => {
  if (!poster_path) return null;
  return (
    <div className="w-52 mx-3 ">
      <img
        className="rounded-lg"
        src={"https://image.tmdb.org/t/p/w300/" + poster_path}
        alt="movielogo"
      />

      <h2>{title}</h2>
    </div>
  );
};

export default MovieList;
