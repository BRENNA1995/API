import { useState } from "react";
import { MoviesList } from "../../components/MoviesList/MoviesList";
import { useGetMovies } from "../../hooks/useGetMovies";
import { useSearchMovieByTitle } from "../../hooks/useSearchMovieByTitle";

export function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies = useGetMovies();
  const searchResults = useSearchMovieByTitle(searchQuery);

  return (
    <article className="container">      
        <MoviesList movies={searchResults.length > 0 ? searchResults : movies} />     
    </article>
  );
}
