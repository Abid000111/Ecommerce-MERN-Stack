/* eslint-disable indent */
import React from "react";
import { Link } from "react-router-dom";
import AddToCartScreen from "./AddToCartScreen";
// import Image from "next/image";

const Header = () => {
	return (
		<>
			<header>
				<div id="nav">
					<div id="nav-part1">
						<a className="header-div-1-link" a="#">
							{/* <div className="header-logo"> */}
								<img src="/logo.jpg" alt="image" />
							{/* </div> */}
						</a>
						<Link to="/">Home</Link>
						<Link className="header-div-1-link" to="shop">
							Shop
						</Link>
						<Link className="header-div-1-link" to="/contact">
							Contact
						</Link>
					</div>
					<AddToCartScreen />
				</div>
			</header>
		</>
	);
};

export default Header;
