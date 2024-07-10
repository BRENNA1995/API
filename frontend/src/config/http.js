import axios from "axios";
import { env } from "./env";
const defaultEnv = 'production';

export const api = axios.create({
    baseURL: 'api-backend-red.vercel.app',
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
