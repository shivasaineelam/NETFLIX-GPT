import React from "react";
import MovieList from "./MovieList";

const MovieListContainer = ({ title, movies }) => {
  return (
    <div className="overflow-x-scroll p-2">
      <h1 className="text-3xl font-bold ">{title}</h1>
      <div className="flex m-5">
        {movies &&
          movies.map((movie, ind) => (
            <div key={ind}>
              <MovieList poster_path={movie.poster_path} title={movie.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MovieListContainer;
