import { useState, useEffect } from "react";
import  MoviesInterno   from "../api/MoviesInterno" 

function useGetComments() {
    const [coment, setComent] = useState({})
   
   useEffect(() => {
    console.log("ENTROU NO HOOKR");
    MoviesInterno.getComents()
        .then((data) => {
            setComent(data)
        })
        .catch((error) => console.error(error))
    }, [])
   
    return coment
  }
   
  export default useGetComments

// export function useGetComents(movieId) {
//     const [comentario, setComentario] = useState(1)

//     useEffect(() => {
//             console.log("ENTROU NO HOOKR");

//            getComents()
//              .then(({ data }) => setComentario(data))
//      }, [])

//     return comentario;
// }


// function useGetComents(){
//     const useGetComents= (() => {
//     useEffect(() => {
//         MoviesInterno.getComents()
//         .then((data) => setComentario(data))
//         .catch((error) => console.error(error));
//     },[] )
//     });
// }

