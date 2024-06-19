import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";

export function useGetMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {MoviesService.getMovies().then(({ data }) => setMovies(data))}, []);
    // MoviesService.getMovies().then(({ data }) => setMovies(data.results))

    // useEffect(() => {
    //     MoviesService
    //         .getMovies()
    //         .then(({ data }) => setMovies(data.results))
    // }, []);
    // console.log(movies)

    return movies;
}
