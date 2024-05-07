import { api2 } from "../config/http";

export class MoviesInterno {
	static async getComents(movieId) {
		return await api2.get(`comentarios/${movieId}`);
	}

}
