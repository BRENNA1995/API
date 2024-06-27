import { api, api2 } from "../config/http";
export class MoviesService {
 	// static getMovies() {
	//  	return api2.get("movie/popular");
	//  }
	
	static getMovies() {	
		return api.get("filmes/");
	}
	
	static getMovieDetail(movieId) {
		return api2.get(`${movieId}`);
	}
	static searchByMovieTitle(movieTitle) {
		return api.get("search/movie", {
			params: {
				query: movieTitle,
			}
		});
	}
	static getComments(movieId) {
		return api.get(`filmes/${movieId}/comentarios`);
	}	
	static insertUsuarios() {
		return api.post(`usuarios/new`);
	}	
	static getUsuarios() {
		return api.get(`usuarios/login`);
	}	
}
