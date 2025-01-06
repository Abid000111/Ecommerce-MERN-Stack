import React from "react";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

const Root = () => {
	return (
		<>
			<div id="root-empty-div"></div>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default Root;
