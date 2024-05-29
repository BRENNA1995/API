import { api2 } from "../config/http";

// export default class MoviesInterno {
//   static getComents(movieId) {
//     return api2.get(`comentarios/${movieId}`);
//   }
// }
const getComents = async  (movieId) => {
	const {data}= await  api2.get(`comentarios/${movieId}`); 
	return data 
}

export default {getComents}
