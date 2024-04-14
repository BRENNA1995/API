import React from "react";
import ReactDOM from "react-dom/client";
import './reset.css'
import "./index.css";
import { ApplicationRoutes } from "./routes/ApplicationRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ApplicationRoutes />
	</React.StrictMode>
);
