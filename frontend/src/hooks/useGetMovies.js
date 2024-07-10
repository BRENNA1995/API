import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export function useGetMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {MoviesService.getMovies().then(({ data }) => setMovies(data))}, []);
    return movies;
}
