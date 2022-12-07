import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import MovieApi from "../common/apis/MovieApi";
import { APIKey } from "../common/apis/MovieApiKey";
import { addMovies } from "../features/movies/movieSlice";
import { useDispatch } from "react-redux/es/exports";
const Home = () => {
  const movieText = "star";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Err : ", err);
      });
      dispatch(addMovies(response.data));
      console.log(response);
    };
    fetchMovies();
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
