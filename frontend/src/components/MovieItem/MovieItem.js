import { Link } from "react-router-dom";
import { MovieImage } from "../MovieImage/MovieImage";
import styles from "./movieItem.module.css";

export function MovieItem({ movie }) {
	return (
		<div className={styles.movie}>
			<Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
				<MovieImage path={movie.poster_path} />
				<h3>{movie.title}</h3>
			</Link>
		</div>
	)
}
