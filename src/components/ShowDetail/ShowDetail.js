import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./ShowDetail.scss";
import {
  fetchAsyncShowDetail,
  getSelectedShow,
  removeSelectedShow,
} from "../../features/movies/movieSlice";

export default function ShowDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedShow);
  //console.log(data) ;

  useEffect(() => {
    dispatch(fetchAsyncShowDetail(id));
    return () => {
      dispatch(removeSelectedShow()); 
    };
  }, [dispatch, id]);
  return (
    <div className="movie-section">  
    {Object.keys(data).length === 0 ? (<div>...Loading</div>) : ( <> 

<div className="section-left">
  <div className="movie-title">{data.name}</div>
  <div className="movie-overview">{data.overview}</div>
  <div className="movie-rating">
    <span>Status : {data.status}</span>
    <span>
      Released on <i className="fa fa-calendar"></i> :{" "}
      {data.first_air_date}
    </span>
    <span>
      TMDB Votes <i className="fa fa-thumbs-up"></i>: {data.vote_count}
    </span>
  </div>
  <div className="movie-info">
    <div>
      <span>Genre :</span>
      <span>
        {data.genres?.[0]?.name + " , " + data.genres?.[1]?.name}
      </span>
    </div>

    <div>
      <span>Language : </span>
      <span>{data?.spoken_languages?.[0]?.english_name}</span>
    </div>
    <div>
      <span>Type : </span>
      <span>Series</span>
    </div>
  </div>
</div>

<div className="section-right">
  <img
    src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
    alt={data.name}
  />
</div>
</>)}
     
    </div>
  );
}
