import axios from "axios";
import { env } from "./env";

const defaultEnv = 'production';

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer ${env[defaultEnv].theMovieDBToken}`
    }
});

export const api2 = axios.create({
    baseURL: 'http://localhost:3002/',
    headers: {
        "Content-Type": "application/json",
      },
});