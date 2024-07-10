import axios from "axios";
import { env } from "./env";
const defaultEnv = 'production';
//require("dotenv").config();

export const api = axios.create({
    baseURL: process.env.REACT_APP_HOSTNAME_API,
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
