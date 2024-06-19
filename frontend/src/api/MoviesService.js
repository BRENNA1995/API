import { api } from "../config/http";

export class MoviesService {
	static getMovies() {	
		return api.get("filmes/");
	}
	// static getMovies() {
	// 	return api.get("movie/popular");
	// }
	static getMovieDetail(movieId) {
		return api.get(`filmes/${movieId}`);
	}
	// static getMovieDetail(movieId) {
	// 	return api.get(`movie/${movieId}`);
	// }
	static searchByMovieTitle(movieTitle) {
		return api.get("search/movie", {
			params: {
				query: movieTitle,
			}
		});
	}
}
