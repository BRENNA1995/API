import { useState } from "react"
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { SearchMovies } from "../../components/SearchMovies/SearchMovies";
import { useGetMovies } from "../../hooks/useGetMovies";
import { useSearchMovieByTitle } from "../../hooks/useSearchMovieByTitle";
import useGetComments from "../../hooks/useGetComments";

import styles from "./Home.module.css";

export function Home() {
	const [searchQuery, setSearchQuery] = useState("");
	const movies = useGetMovies();
	const searchResults = useSearchMovieByTitle(searchQuery);

	function handleOnSearch(movieTitle) {
		setSearchQuery(movieTitle);
	}
	const dadosComentario = useGetComments(); 

	return (
	<article className={styles.page}>
		<body>
			<li class="container" >
				<SearchMovies onSearch={handleOnSearch} />
				<MoviesList movies={searchResults.length > 0 ? searchResults : movies} />
			</li>
		</body>
	</article>
);
}
