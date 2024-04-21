import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

export default function ShowCard(props) {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/show/${data.id}`}>
        <div className="card-inner">
          <div className="card-top">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              alt={data.title}
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.name}</h4>
              <p>{data.first_air_date.substring(0, 4)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
