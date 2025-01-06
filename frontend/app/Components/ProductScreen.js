// import React, { useContext, useEffect, useReducer, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import Rating from "./Rating";
// // import { Helmet, HelmetProvider } from "react-helmet-async";
// // import { Store } from "../Store";

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case "FETCH_REQUEST":
// 			return { ...state, loading: true };
// 		case "FETCH_SUCCESS":
// 			return { ...state, product: action.payload, loading: false, error: "" };
// 		case "FETCH_FAIL":
// 			return { ...state, loading: false, error: action.payload };
// 		default:
// 			return state;
// 	}
// };

// const ProductScreen = () => {
// 	const [quantity, setQuantity] = useState(1);

// 	const [downDescription, setDownDescription] = useState(true);
// 	const toggleDescription = () => {
// 		setDownDescription(!downDescription);
// 	};

// 	const [downMaterials, setDownMaterials] = useState(true);
// 	const toggleMaterials = () => {
// 		setDownMaterials(!downMaterials);
// 	};

// 	const [downShipping, setDownShipping] = useState(true);
// 	const toggleShipping = () => {
// 		setDownShipping(!downShipping);
// 	};

// 	const params = useParams();
// 	const { slug } = params;

// 	const [{ loading, error, product }, dispatch] = useReducer(reducer, {
// 		product: [],
// 		loading: true,
// 		error: ""
// 	});

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			dispatch({ type: "FETCH_REQUEST" });
// 			try {
// 				const result = await axios.get(
// 					`http://localhost:5000/api/products/slug/${slug}`
// 				);
// 				dispatch({ type: "FETCH_SUCCESS", payload: result.data });
// 				console.log(result.data);
// 			} catch (err) {
// 				dispatch({ type: "FETCH_FAIL", payload: err.message });
// 			}
// 		};
// 		fetchData();
// 	}, [slug]);







// 	// const { state, dispatch: ctxDispatch } = useContext(Store);
// 	// const { cart } = state;

// 	// const addToCartHandler = async () => {
// 	// 	console.log("Product:", product);
// 	// 	console.log("Cart Items:", cart.cartItems);

// 	// 	const existItem = cart.cartItems.find((x) => x._id === product._id);
// 	// 	console.log("Exist Item:", existItem);

// 	// 	const quantity = existItem ? existItem.quantity + 1 : 1;
// 	// 	console.log("Quantity:", quantity);

// 	// 	const { data } = await axios.get(
// 	// 		`http://localhost:5000/api/products/${product._id}`
// 	// 	);
// 	// 	console.log(data);
// 	// 	if (data.countInStock < quantity) {
// 	// 		window.alert("Sorry. Product is out of stock");
// 	// 		return;
// 	// 	}

// 	// 	ctxDispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
// 	// };






// 	return (
// 		// <div id="product-screen">
// 		loading ? (
// 			<div className="product-screen">Loading...</div>
// 		) : error ? (
// 			<div className="product-screen">{error}</div>
// 		) : (
// 			<div className="product-screen">
// 				<div id="product-screen-section">
// 					<div id="product-screen-section-img">
// 						<img src={product.image} />
// 					</div>
// 					<div id="product-screen-section-div2">
// 						<p id="product-screen-section-name">{product.name}</p>
// 						<hr />
// 						<div>
// 							<p className="product-screen-section-div3">Price: {product.price} BDT</p>
// 							<hr />
// 							<p className="product-screen-section-div3">
// 								<Rating rating={product.rating} numReviews={product.numReviews} />
// 							</p>
// 							<hr />
// 							<p className="product-screen-section-div3">
// 								Stock: {product.countInStock} pieces
// 							</p>
// 							<hr />
// 							{product.countInStock > 0 && (
// 								<div>
// 									<p id="product-screen-section-available">Available</p>
// 									<hr />
// 								</div>
// 							)}
// 							{product.countInStock == 0 && (
// 								<div>
// 									<p id="product-screen-section-unavailable">Unavailable</p>
// 									<hr />
// 								</div>
// 							)}
// 						</div>
// 						<div id="product-size">
// 							<p id="product-size-p1">Size:</p>
// 							<p className="size-box">39</p>
// 							<p className="size-box">40</p>
// 							<p className="size-box">41</p>
// 							<p className="size-box">42</p>
// 							<p className="size-box">43</p>
// 							<p className="size-box">44</p>
// 						</div>
// 						<div id="product-color">
// 							<p id="product-color-p1">Color:</p>
// 							<p className="color-box">Black</p>
// 							<p className="color-box">Red</p>
// 							<p className="color-box">White</p>
// 							<p className="color-box">Brown</p>
// 						</div>
// 						<div id="product-quantity">
// 							<p id="product-quantity-p1">Quantity:</p>
// 							<input
// 								id="product-quantity-input"
// 								type="number"
// 								value={quantity}
// 								onChange={(e) => setQuantity(e.target.value)}
// 							></input>
// 							{/* <Link to="/Model"> */}
// 							<Link to="#">
// 								<button type="button" id="product-screen-3D-model">
// 									View 3D Model
// 								</button>
// 							</Link>
// 							{/* {product.countInStock > 0 && (
// 								<button onClick={addToCartHandler} id="add-to-cart">
// 									Add to cart
// 								</button>
// 							)} */}
// 							{product.countInStock > 0 && (
// 								<button id="add-to-cart">
// 									Add to cart
// 								</button>
// 							)}
// 						</div>
// 						{product.countInStock > 0 && <button id="buy-now">Buy Now</button>}
// 						<div
// 							className="product-screen-description"
// 							onClick={() => {
// 								toggleDescription();
// 							}}
// 						>
// 							<div className="product-screen-description-div1">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									viewBox="0 0 24 24"
// 									fill="currentColor"
// 								>
// 									<path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H8V9H6V7ZM8 11H6V13H8V11ZM6 15H8V17H6V15ZM18 7H10V9H18V7ZM10 15H18V17H10V15ZM18 11H10V13H18V11Z"></path>
// 								</svg>
// 								<button>Description</button>
// 							</div>
// 							<svg
// 								id="product-screen-description-svg-down"
// 								style={{ display: downDescription === true ? "block" : "none" }}
// 								xmlns="http://www.w3.org/2000/svg"
// 								viewBox="0 0 24 24"
// 								fill="currentColor"
// 							>
// 								<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
// 							</svg>

// 							<svg
// 								id="product-screen-description-svg-up"
// 								style={{ display: downDescription === true ? "none" : "block" }}
// 								xmlns="http://www.w3.org/2000/svg"
// 								viewBox="0 0 24 24"
// 								fill="currentColor"
// 							>
// 								<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
// 							</svg>
// 						</div>
// 						<p
// 							id="description-text"
// 							style={{ display: downDescription === !true ? "block" : "none" }}
// 						>
// 							{product.description}
// 						</p>

// 						<div
// 							className="product-screen-description"
// 							onClick={() => {
// 								toggleMaterials();
// 							}}
// 						>
// 							<div className="product-screen-description-div1">
// 								<img src="/Materials.png" />
// 								<button>Materials</button>
// 							</div>
// 							<svg
// 								id="product-screen-description-svg-down"
// 								style={{ display: downMaterials === true ? "block" : "none" }}
// 								xmlns="http://www.w3.org/2000/svg"
// 								viewBox="0 0 24 24"
// 								fill="currentColor"
// 							>
// 								<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
// 							</svg>

// 							<svg
// 								id="product-screen-description-svg-up"
// 								style={{ display: downMaterials === true ? "none" : "block" }}
// 								xmlns="http://www.w3.org/2000/svg"
// 								viewBox="0 0 24 24"
// 								fill="currentColor"
// 							>
// 								<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
// 							</svg>
// 						</div>
// 						<p
// 							id="materials-text"
// 							style={{ display: downMaterials === !true ? "block" : "none" }}
// 						>
// 							{product.materials}
// 						</p>

// 						<div
// 							className="product-screen-description"
// 							onClick={() => {
// 								toggleShipping();
// 							}}
// 						>
// 							<div className="product-screen-description-div1">
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									viewBox="0 0 24 24"
// 									fill="currentColor"
// 								>
// 									<path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z"></path>
// 								</svg>
// 								<button>Shipping</button>
// 							</div>
// 							<svg
// 								id="product-screen-description-svg-down"
// 								style={{ display: downShipping === true ? "block" : "none" }}
// 								xmlns="http://www.w3.org/2000/svg"
// 								viewBox="0 0 24 24"
// 								fill="currentColor"
// 							>
// 								<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
// 							</svg>

// 							<svg
// 								id="product-screen-description-svg-up"
// 								style={{ display: downShipping === true ? "none" : "block" }}
// 								xmlns="http://www.w3.org/2000/svg"
// 								viewBox="0 0 24 24"
// 								fill="currentColor"
// 							>
// 								<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
// 							</svg>
// 						</div>
// 						<p
// 							id="shipping-text"
// 							style={{ display: downShipping === !true ? "block" : "none" }}
// 						>
// 							{product.shipping}
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		)
// 	);
// };

// export default ProductScreen;
