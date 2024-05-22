import React from "react";
import ReactDOM from "react-dom/client";
// import './reset.css';
import "./index.css";
import { ApplicationRoutes } from "./routes/ApplicationRoutes";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApplicationRoutes />
	</React.StrictMode>
);
