import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./MovieDetail.css";
import {
  fetchAsyncMovieOrShowsDetails,
  getDetail,
} from "./../features/movies/movieSlice";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getDetail);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowsDetails(imdbID));
  }, [dispatch, imdbID]);
  return (
    <div className="movie-section">
      <div className="section-left">
        <div className="movie-title">{data.Title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className="fa fa-thumbs-up"></i> : {data.imdbVotes}
          </span>
          <span>
            Runtime <i className="fa fa-film"></i> : {data.Runtime}
          </span>
          <span>
            Year <i className="fa fa-calendar"></i> : {data.Year}
          </span>
        </div>
        <div className="movie-plot">{data.Plot}</div>
        <div className="movie-info">
          <span>Director</span>
          <span>{data.Director}</span>
          <span>Stars</span>
          <span>{data.Actors}</span>
          <span>Generes</span>
          <span>{data.Genre}</span>
          <span>Languages</span>
          <span>{data.Language}</span>
          <span>Awards</span>
          <span>{data.Awards}</span>
        </div>
      </div>
      <div className="section-right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
