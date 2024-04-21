import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/movie/${data.id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.title}</h4>
              <p>{data.release_date.substring(0, 4)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
