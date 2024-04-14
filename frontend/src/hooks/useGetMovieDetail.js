import { useState, useEffect } from "react";
import { MoviesService } from "../api/MoviesService";

export function useGetMovieDetail(movieId) {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        MoviesService.getMovieDetail(movieId)
            .then(({ data }) => setMovie(data))
    }, [movieId])

    return movie;
}
