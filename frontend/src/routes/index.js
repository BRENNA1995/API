import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { Home } from "../pages/Home/Home";
import { Start } from "../pages/Start/Start";
import { Login } from "../pages/Login/Login";
import { MovieDetails } from "../pages/movieDetails/MovieDetails";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Start />
			},
			{
				path: "/home",
				element: <Home />
			},
			{
				path: "/login",
				element: <Login />
			},
			{
				path: "/movie/:movieId",
				element: <MovieDetails />
			}
		]
	}
])
