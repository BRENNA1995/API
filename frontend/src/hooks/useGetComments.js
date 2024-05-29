import { useState, useEffect } from "react";
import  MoviesInterno   from "../api/MoviesInterno" 

function useGetComments(movieId) {
    const [coment, setComent] = useState({})
   
   useEffect(() => {
    MoviesInterno.getComents(movieId)
        .then((data) => {
            setComent(data)
        })
        .catch((error) => console.error(error))
    }, [movieId])
   
    return coment
  }
   
  export default useGetComments
