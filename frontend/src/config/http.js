import axios from "axios";
import { env } from "./env";
const defaultEnv = 'production';

export const api = axios.create({
    baseURL: 'http://localhost:3003/',
    headers: {
        "Content-Type": "application/json",
      },
 
});

export const api2 = axios.create({
   baseURL: 'https://api.themoviedb.org/3/',
   headers: {
       Authorization: `Bearer ${env[defaultEnv].theMovieDBToken}`
   }
});
