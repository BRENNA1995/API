import { Link } from "react-router-dom";
import { MovieImage } from "../MovieImage/MovieImage";
import styles from "./movieItem.module.css";
//import axios from 'axios'; 
//const axios = require('axios');
//const URL_BASE = 'http://localhost:3001/api';

export function MovieItem({ movie }) {
	// axios.post(URL_BASE, userData)
	// 	.then(response => {
	// 	console.log(response.data);
	// })
	// 	.catch(error => {
	// 	console.error(error);
	// });

	return (
		<div className={styles.movie}>
			<Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
				<MovieImage path={movie.poster_path} />
				<h3>{movie.title}</h3>
			</Link>
		</div>
	)
}

