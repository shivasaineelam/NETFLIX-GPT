import { useEffect } from "react";
import { MOVIELINKP1, MOVIELINKP2, options } from "./Constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "./movieSlice";

const useTrailerVideo = () => {
  const dispatch = useDispatch();
  const getTrailerData = async () => {
    const data = await fetch(MOVIELINKP1 + "572802" + MOVIELINKP2, options);
    const json = await data.json();
    const videoList = json.results;
    const filteredList = videoList.filter((video) => video.type === "Trailer");
    if (filteredList.length === 0) {
      dispatch(addTrailerVideo(json.results[0]));
      return;
    }
    dispatch(addTrailerVideo(filteredList[0]));
  };
  useEffect(() => {
    getTrailerData();
  }, []);
};
export default useTrailerVideo;
