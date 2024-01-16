import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import ContextProvider from "./Context.tsx";
import App from "./App.tsx";
import "./index.css";
import HomePage from "./Pages/HomePage.tsx";
import OrderPage from "./Pages/OrderPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<BrowserRouter>
			<ContextProvider>
				<Routes>
					<Route path="/" element={<App />}>
						<Route path="" element={<HomePage />} />
						<Route path="order" element={<OrderPage />} />
					</Route>
				</Routes>
			</ContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
