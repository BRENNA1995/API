import { api2 } from "../config/http";

// export default class MoviesInterno {
//   static getComents(movieId) {
//     return api2.get(`comentarios/${movieId}`);
//   }
// }
const getComents = async  (movieId) => {
	console.log("ENTROU NO axios ");
	const {data}= await  api2.get(`comentarios/${movieId}`); 
	console.log(data);
	return data 
}

export default {getComents}
