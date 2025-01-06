"use client";
import "./globals.css";
import React from "react";
import {
	Route,
	// Routes,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from "react-router-dom";
import ShopScreen from "./Components/ShopScreen";
import ContactScreen from "./Components/ContactScreen";
// import ProductScreen from "./Components/ProductScreen";
import Root from "./Root";
import ThankYou from "./Components/ThankYou";
// import { HelmetProvider } from "react-helmet-async";
// import { StoreProvider } from "./Store";
import ErrorPage from "./ErrorPage";
// import CanvasComponent from "./Components/CanvasComponent";
// import Model from "./Components/Model";
import { AppProvider } from "./Context/productcontext";
import SingleProduct from "./Components/SingleProduct";
import { CartProvider } from "./Context/cart_context";
import BuyScreen from "./Components/BuyScreen";
import Home from "./Components/Home";

// export const metadata = {
// 	title: "BeAlphaa",
// 	icons: {
// 		icon: ["/favicon.ico?v=4"],
// 		apple: ["/apple-touch-icon.png?v=4"],
// 		shortcut: ["/apple-touch-icon.png"]
// 	}
// }

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="" element={<Home />} />
			<Route path="shop" element={<ShopScreen />} />
			<Route path="contact" element={<ContactScreen />} />
			<Route path="gratitude-kr-g4-43" element={<ThankYou />} />
			{/* <Route path="product/:slug" element={<ProductScreen />} /> */}
			<Route path="singleproduct/:name" element={<SingleProduct />} />
			<Route path="buy" element={<BuyScreen />} />
			{/* <Route path="Model" element={<Model />} /> */}
			<Route path="*" element={<ErrorPage />} />
		</Route>
	)
);

export default function RootLayout({ children }) {
	return (
		<>
			<html lang="en">
				<head>
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/all.min.css"
					/>
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Protest+Guerrilla&display=swap"
					/>
					<title>BeAlphaa</title>
					<link rel="icon" href="/favicon.ico?v=4" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png?v=4" />
					<link rel="shortcut icon" href="/apple-touch-icon.png" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
						rel="stylesheet"
					/>
				</head>
				<body>
					<AppProvider>
						<CartProvider>
							{/* <StoreProvider> */}
							<RouterProvider router={router}>{children}</RouterProvider>
							{/* </StoreProvider> */}
						</CartProvider>
					</AppProvider>
				</body>
			</html>
		</>
	);
}
