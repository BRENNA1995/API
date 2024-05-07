import { useState, useEffect } from "react";
import { MoviesInterno } from "../api/MoviesInterno";

export function useGetComents(movieId) {
    const [comentario, setComentario] = useState(1)

    useEffect(() => {
         MoviesInterno.getComents(movieId)
             .then(({ data }) => setComentario(data))
     }, [movieId])

   

    return comentario;
}
