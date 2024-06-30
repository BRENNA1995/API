import { api, api2 } from "../config/http";
export class MoviesService {
	static getMovies() {
		return api.get("filmes/");
	}
	static getMovieDetail(movieId) {
		return api2.get(`movie/${movieId}`);
	}
	static searchByMovieTitle(movieTitle) {
		return api2.get("search/movie", {
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
	static getAllUsuarios() {
		return api.get(`usuarios/all`);
	}
	static deleteUsuario(usuarioId) {
		return api.delete(`usuarios/${usuarioId}`);
	}
	static bloquearUsuario(usuarioId) {
		return api.put(`usuarios/${usuarioId}`);
	}
	static liberarUsuario(usuarioId) {
		return api.put(`usuarios/liberar/${usuarioId}`);
	}
}
