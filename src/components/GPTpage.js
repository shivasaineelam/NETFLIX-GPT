import React, { useRef } from "react";
import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import { HOME_PAGE, options } from "../utils/Constants";
import { addgptmovie, showgptmovie } from "../utils/GPTSlice";
import MovieListContainer from "./MovieListContainer";

const GPTpage = () => {
  const userdata = useRef();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.gpt.gptmovies);
  // const showgptmovie=useSelector((store)=>store.gptgptmov)

  const getgptmoviedata = async (name) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        name +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addgptmovie(json.results));
    dispatch(showgptmovie);
  };
  const handlegptsearchclick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      userdata?.current?.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const data = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    const movies = data.choices[0].message.content.split(",");
    movies.map((movie) => getgptmoviedata(movie));
  };
  return (
    <div className="pt-36 text-center bg-black h-screen text-white">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={userdata}
          className="w-80 p-2 border-black text-black bg-gray-100 rounded-lg"
          placeholder="enter the movies you want to watch"
        ></input>
        <button
          className="m-2 p-2 px-4 bg-red-600 rounded-lg"
          onClick={handlegptsearchclick}
        >
          search
        </button>
      </form>
      {showgptmovie &&
        data.map((movies, ind) => (
          <MovieListContainer
            key={ind}
            title={movies[0].title}
            movies={movies}
          />
        ))}
    </div>
  );
};

export default GPTpage;
