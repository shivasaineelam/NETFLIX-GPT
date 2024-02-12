import Header from "./Header";
import useMovieList from "../utils/useMovieList";
import BackgroundTitle from "./BackgroundTitle";
import BackgroundVideo from "./BackgroundVideo";
import SecondContainer from "./SecondContainer";
import useTrailerVideo from "../utils/useTrailerVideo";

const Browse = () => {
  useMovieList("now_playing");
  useMovieList("popular");
  useMovieList("top_rated");
  useMovieList("upcoming");
  useTrailerVideo();
  return (
    <div className="m-0 p-0">
      <Header />
      <BackgroundTitle />
      <BackgroundVideo />
      <SecondContainer />
    </div>
  );
};

export default Browse;
