import { useEffect } from "react";
import { options } from "./Constants";
import { useDispatch } from "react-redux";
import {
  addNowPlayingLists,
  addUpcomingLists,
  addPopularLists,
  addTopRatedLists,
} from "./movieSlice";

const useMovieList = (type) => {
  const dispatch = useDispatch();
  const getmovielistdata = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + type + "?language=en-US&page=1",
      options
    );

    const json = await data.json();
    if (type === "now_playing") dispatch(addNowPlayingLists(json.results));
    else if (type === "popular") dispatch(addPopularLists(json.results));
    else if (type === "top_rated") dispatch(addTopRatedLists(json.results));
    else if (type === "upcoming") dispatch(addUpcomingLists(json.results));
  };
  useEffect(() => {
    getmovielistdata();
  }, []);
};

export default useMovieList;
