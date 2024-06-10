import { MovieItem } from "../MovieItem/MovieItem";

export function MoviesList({ movies }) {
	return (
		<section className="with-header">
			<ul className="collection-item row">{movies.map((movie) => <MovieItem key={movie.id} movie={movie} /> )}</ul>			
		</section>
	)
}
