import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import MovieApi from "../common/apis/MovieApi";
import { APIKey } from "../common/apis/MovieApiKey";
const Home = () => {
  useEffect(() => {
    const movieText = "star";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("Err : ", err);
      });
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
