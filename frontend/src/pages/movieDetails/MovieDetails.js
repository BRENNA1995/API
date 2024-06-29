import { useParams } from "react-router-dom";
import { MovieImage } from "../../components/MovieImage/MovieImage";
import { useGetMovieDetail } from "../../hooks/useGetMovieDetail";
import { MovieComments } from "../../components/MovieComments/MovieComments";
import { ListComments } from "../../components/ListComments/ListComments";
import styles from "./MovieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const movie = useGetMovieDetail(movieId);   
  const movieInfo = { fontSize: '22px', marginTop: '-20px', lineHeight: '30px', maxWidth: '800px' }
  const movietitle = { marginBottom: '20px', fontWeight: '700', fontSize: '28px' }

  return (
    <article className={styles.page}>
      <div className='container row'>
        <div className="col s12 m7 l4">
          {movie.poster_path && (<MovieImage path={movie.poster_path} size={300} />)}
        </div>
        <div className='col s12 m5 l8' style={{ ...movieInfo }}>
          <h1 style={{ ...movietitle }}>{movie.title}</h1>
          <div className={styles.movieDescription}>{movie.overview}</div>
          <div>
            <ul>
              <li>
                <span className={styles.topicInfor}>Data de lançamento: </span>
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
      <MovieComments idFilme={movieId} />
      <ListComments idFilme={movieId} />
    </article>
  );
}
