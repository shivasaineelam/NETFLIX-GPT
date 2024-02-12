import React from "react";
import { useSelector } from "react-redux";
import MovieListContainer from "./MovieListContainer";

const SecondContainer = () => {
  const nowplaying = useSelector((store) => store.movie?.nowplaying);
  const popular = useSelector((store) => store.movie?.popular);
  const upcomming = useSelector((store) => store.movie?.upcoming);
  const toprated = useSelector((store) => store.movie?.toprated);

  if (!nowplaying) return;

  return (
    <div className="text-white bg-black overflow-hidden">
      <MovieListContainer title={"nowplaying"} movies={nowplaying} />
      <MovieListContainer title={"popular"} movies={popular} />
      <MovieListContainer title={"upcoming"} movies={upcomming} />
      <MovieListContainer title={"toprated"} movies={toprated} />
    </div>
  );
};

export default SecondContainer;
