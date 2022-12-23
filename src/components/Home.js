import React, { useEffect } from "react";
import MovieListing from "./MovieListing";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/movies/movieSlice";
import { useDispatch } from "react-redux/es/exports";
const Home = () => {
  const termFirst = "star";
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies(termFirst));
    dispatch(fetchAsyncShows(termFirst));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
