import { api2 } from "../config/http";

// export default class MoviesInterno {
//   static getComents(movieId) {
//     return api2.get(`comentarios/${movieId}`);
//   }
// }
const getComents = async  () => {
	console.log("ENTROU NO axios ");
	const {data}= await  api2.get(`comentarios/693134`); 
	console.log(data);
	return data 
}

export default {getComents}
