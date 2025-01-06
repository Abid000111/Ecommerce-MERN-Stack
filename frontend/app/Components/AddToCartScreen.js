import React, { useEffect, useRef } from "react";
import { useCartContext } from "../Context/cart_context";
import CartItem from "./CartItem";
import FormatPrice from "../Helpers/FormatPrice";
import { Link } from "react-router-dom";

const AddToCartScreen = () => {
	const { cart, clearCart, total_item, total_price, checkOutClick, cartScreen, setCartScreen } = useCartContext();
	// const [cartScreen, setCartScreen] = useState(false);
	const cartScreenRef = useRef(null);

	// const toggleCartScreen = () => {
	// 	setCartScreen(!cartScreen);
	// 	console.log("toggle click ... =>", cartScreen);
	// };

	const toggleCartScreen = () => {
		// setCartScreen((prevState) => !prevState);
		setCartScreen(!cartScreen);
		console.log("toggle click ... =>", cartScreen);
	};

	console.log("load ... =>", cartScreen);

	// console.log("cart..... =>", cart);

	const handleClickOutside = (event) => {
		if (cartScreenRef.current && !cartScreenRef.current.contains(event.target)) {
			setCartScreen(false);
			console.log("handle click ... =>", cartScreen);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	// }, [cartScreen]);
	});

	return (
		<>
			<div id="nav-part2">
				<svg
					id="svg1"
					style={{ display: !cartScreen ? "block" : "none" }}
					className="nav-svg"
					// onClick={toggleCartScreen}
					onClick={toggleCartScreen}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
				</svg>

				<svg
					id="svag2"
					style={{ display: !cartScreen ? "none" : "block" }}
					className="nav-svg"
					// onClick={toggleCartScreen}
					onClick={toggleCartScreen}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path>
				</svg>

				{/* <p id="nav-cart-number">({cart.length})</p> */}
				<p id="nav-cart-number">({total_item})</p>
			</div>

			{/* <div id="cart-screen" style={{ display: cartScreen ? "block" : "none" }}> */}
			<div
				id="cart-screen"
				ref={cartScreenRef}
				style={{ width: cartScreen ? "250px" : "0px" }}
			>
				<div className="cart-screen-main">
					<div className="cart-screen-close-div">
						<svg
							className="cart-screen-close"
							onClick={toggleCartScreen}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path>
						</svg>
					</div>
					<div id="cart-screen-upper">
						{cart.map((curElem) => {
							return <CartItem key={curElem.id} {...curElem} />;
						})}
						<div className="no-item">
							<h2 style={{ display: cart.length ? "none" : "block" }}>
								No item in cart
							</h2>
						</div>
					</div>

					<div
						className="sub-total"
						style={{
							display: cart.length ? "block" : "none",
							width: cartScreen ? "90%" : "0px",
							fontSize: cartScreen ? "1rem" : "0px"
						}}
					>
						Total: <FormatPrice price={total_price} />
					</div>

					<div className="cart-screen-clear-div">
						<button
							className="cart-screen-clear"
							style={{
								display: cart.length ? "block" : "none",
								width: cartScreen ? "6rem" : "0px",
								fontSize: cartScreen ? "1rem" : "0px"
							}}
							onClick={clearCart}
						>
							CLear Cart
						</button>
					</div>

					<Link to="/buy">
						<button
							className="check-out"
							style={{
								display: cart.length ? "block" : "none",
								width: cartScreen ? "6rem" : "0px",
								fontSize: cartScreen ? "1rem" : "0px"
							}}
							onClick={() => {
								checkOutClick();
							}}
						>
							Check Out
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default AddToCartScreen;
