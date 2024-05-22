import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { MovieImage } from "../../components/MovieImage/MovieImage";
import { useGetMovieDetail } from "../../hooks/useGetMovieDetail";
import { MovieComments } from "../../components/MovieComments/MovieComments";
import styles from "./MovieDetails.module.css";

import { ListComments } from "../../components/ListComments/ListComments";
import useGetComments from "../../hooks/useGetComments";

export function MovieDetails() {
  const { movieId } = useParams();
  const movie = useGetMovieDetail(movieId);
  console.log(13,movie.poster_path)
  const coment  = useGetComments(movieId);

    return (
      <article className={styles.page}>
        <button id={styles.btnHome}><Link to={"/"} style={{ textDecoration: 'none' }}>Início</Link></button>
        <div className={styles.movie}>
          {movie.poster_path &&  <MovieImage path={movie.poster_path} size={300} />}
          <div className={styles.movieInfo}>
            <h1>{movie.title}</h1>
            <div className={styles.movieDescription}>{movie.overview}</div>
            <div>
              <ul>
                <li>
                  <span className={styles.topicInfor}>
                    Data de lançamento:{" "}
                  </span>
                  <span>{movie.release_date}</span>
                </li>
                <li>
                  <span className={styles.topicInfor}>Nota: </span>
                  <span>{movie.vote_average}</span>
                </li>
                <li>
                  <span className={styles.topicInfor}>Popularidade: </span>
                  <span>{movie.popularity}</span>
                </li>
                <li>
                  <span className={styles.topicInfor}>Duração: </span>
                  <span>{`${movie.runtime} minutos`}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <MovieComments idFilme={movieId} nomeFilme={movie.title} />
        <ListComments dados={coment} />
      </article>
    );  
}
