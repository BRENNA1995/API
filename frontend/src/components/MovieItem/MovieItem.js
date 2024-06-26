import { Link } from "react-router-dom";
import { MovieImage } from "../MovieImage/MovieImage";
import React from "react";

export function MovieItem({ movie }) {

  return (
    <li className="col s12 m5 l3">
      <div className="card hoverable">
        <Link to={`/filmes/${movie.id}`} style={{ textDecoration: "none" }}>
          <div className="card-image">
            <MovieImage path={movie.poster} />
          </div>
          <div className="card-content" style={{ height: "130px" }}>
            <span
              className="card-title"
              style={{ color: "#121212", fontWeight: 400, fontSize: "20px" }}
            >
              {movie.title}
            </span>
          </div>
        </Link>
      </div>
    </li>
  );
}
