import { MovieItem } from "../MovieItem/MovieItem";
// import styles from "./MoviesList.module.css";

export function MoviesList({ movies }) {
	console.log(5,movies)
	return (
		<section className="with-header">
			<ul class="collection-item row">{movies.map((movie) => <MovieItem key={movie.id} movie={movie} /> )}</ul>			
		</section>
	)
}
