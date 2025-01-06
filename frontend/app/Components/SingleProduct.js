import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../Context/productcontext";
import FormatPrice from "../Helpers/FormatPrice";
// import Rating from "./Rating";
import AddToCart from "./AddToCart";
// import Image from "next/image";

// const API = "https://bealphaa-server.com.bealphaa.com/api/products";
const API = "http://localhost:5001/api/products";

const SingleProduct = () => {
	const { getSingleProduct, isSingleLoading, singleProduct } =
		useProductContext();

	const { name } = useParams();

	const [image1, setImage1] = useState("");

	const [image2, setImage2] = useState("");

	const [image3, setImage3] = useState("");

	const [image4, setImage4] = useState("");

	const [image5, setImage5] = useState("");

	// const [image, setImage] = useState(image1);

	// console.log("image1 =>", image);
	console.log(isSingleLoading);

	const [downDescription, setDownDescription] = useState(true);
	const toggleDescription = () => {
		setDownDescription(!downDescription);
	};

	const [downMaterials, setDownMaterials] = useState(true);
	const toggleMaterials = () => {
		setDownMaterials(!downMaterials);
	};

	const [downShipping, setDownShipping] = useState(true);
	const toggleShipping = () => {
		setDownShipping(!downShipping);
	};

	useEffect(() => {
		getSingleProduct(`${API}?name=${name}`);
		// }, []);
	}, []);
	// console.log("single product name...........=>", singleProduct);

	useEffect(() => {
		if (singleProduct && singleProduct.images) {
			const images = singleProduct.images;
			setImage1(images[0] || ""); // Use optional chaining to handle undefined or missing values
			setImage2(images[1] || "");
			setImage3(images[2] || "");
			setImage4(images[3] || "");
			setImage5(images[4] || "");
		}
	}, [singleProduct]);

	const {
		id,
		price,
		rating,
		reviews,
		stock,
		description,
		materials,
		shipping,
		// model_link,
		images
	} = singleProduct || {};
	// console.log("iamges single =>", images);
	console.log("single product info ===>>>", singleProduct);

	const buy = () => console.log("order...=>", singleProduct);
	console.log(id, rating, reviews, images);
	buy();

	return (
		<>
			{/* <div className="product-screen"> */}
			<div id="product-screen-section">
				<div id="product-screen-section-img">
					{/* <MyImage images={images}/> */}
					{/* {images && images.length > 0 && <img src={image1} alt="Product" />} */}
					<img loading="lazy" src={image1} alt="Product" />

					{/* <img src={image1} alt="Product" /> */}
				</div>
				<div id="product-screen-section-div2">
					<p id="product-screen-section-name">{name}</p>
					<hr />
					<div>
						<p className="product-screen-section-div3">
							Price: {<FormatPrice price={price} />}
						</p>
						<hr />
						{/* <p className="product-screen-section-div3"> */}
						{/* <Rating rating={rating} numReviews={reviews} /> */}
						{/* </p> */}
						{/* <hr /> */}
						<p className="product-screen-section-div3">Stock: {stock} pieces</p>
						<hr />
						{stock > 0 && (
							<div>
								<p id="product-screen-section-available">Available</p>
								<hr />
							</div>
						)}
						{stock == 0 && (
							<div>
								<p id="product-screen-section-unavailable">Unavailable</p>
								<hr />
							</div>
						)}
					</div>

					{stock > 0 && <AddToCart product={singleProduct} image={image1} />}

					{/* {stock > 0 && <button id="buy-now" onClick={buy}>Buy Now</button>} */}
					<div
						className="product-screen-description"
						onClick={() => {
							toggleDescription();
						}}
					>
						<div className="product-screen-description-div1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M2 4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4ZM4 5V19H20V5H4ZM6 7H8V9H6V7ZM8 11H6V13H8V11ZM6 15H8V17H6V15ZM18 7H10V9H18V7ZM10 15H18V17H10V15ZM18 11H10V13H18V11Z"></path>
							</svg>
							<button>Description</button>
						</div>
						<svg
							id="product-screen-description-svg-down"
							style={{ display: downDescription === true ? "block" : "none" }}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
						</svg>

						<svg
							id="product-screen-description-svg-up"
							style={{ display: downDescription === true ? "none" : "block" }}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
						</svg>
					</div>
					<p
						id="description-text"
						style={{ display: downDescription === !true ? "block" : "none" }}
					>
						{description}
					</p>

					<div
						className="product-screen-description"
						onClick={() => {
							toggleMaterials();
						}}
					>
						<div className="product-screen-description-div1">
							<img src="/Materials.png" alt="image" />
							<button>Materials</button>
						</div>
						<svg
							id="product-screen-description-svg-down"
							style={{ display: downMaterials === true ? "block" : "none" }}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
						</svg>

						<svg
							id="product-screen-description-svg-up"
							style={{ display: downMaterials === true ? "none" : "block" }}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
						</svg>
					</div>
					<p
						id="materials-text"
						style={{ display: downMaterials === !true ? "block" : "none" }}
					>
						{materials}
					</p>

					<div
						className="product-screen-description"
						onClick={() => {
							toggleShipping();
						}}
					>
						<div className="product-screen-description-div1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M8.96456 18C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456ZM15 7H3V15.0505C3.63526 14.4022 4.52066 14 5.5 14C6.8962 14 8.10145 14.8175 8.66318 16H14.3368C14.5045 15.647 14.7296 15.3264 15 15.0505V7ZM17 13H21V12.715L18.9917 10H17V13ZM17.5 19C18.1531 19 18.7087 18.5826 18.9146 18C18.9699 17.8436 19 17.6753 19 17.5C19 16.6716 18.3284 16 17.5 16C16.6716 16 16 16.6716 16 17.5C16 17.6753 16.0301 17.8436 16.0854 18C16.2913 18.5826 16.8469 19 17.5 19ZM7 17.5C7 16.6716 6.32843 16 5.5 16C4.67157 16 4 16.6716 4 17.5C4 17.6753 4.03008 17.8436 4.08535 18C4.29127 18.5826 4.84689 19 5.5 19C6.15311 19 6.70873 18.5826 6.91465 18C6.96992 17.8436 7 17.6753 7 17.5Z"></path>
							</svg>
							<button>Shipping</button>
						</div>
						<svg
							id="product-screen-description-svg-down"
							style={{ display: downShipping === true ? "block" : "none" }}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
						</svg>

						<svg
							id="product-screen-description-svg-up"
							style={{ display: downShipping === true ? "none" : "block" }}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M11.9999 10.8284L7.0502 15.7782L5.63599 14.364L11.9999 8L18.3639 14.364L16.9497 15.7782L11.9999 10.8284Z"></path>
						</svg>
					</div>
					<p
						id="shipping-text"
						style={{ display: downShipping === !true ? "block" : "none" }}
					>
						{shipping}
					</p>
				</div>
			</div>
			<div className="single-featured-img-div">
				<img
					className="single-featured-img"
					loading="lazy"
					src={image2}
					alt="Product"
				/>
				<img
					className="single-featured-img"
					loading="lazy"
					src={image3}
					alt="Product"
				/>
				<img
					className="single-featured-img"
					loading="lazy"
					src={image4}
					alt="Product"
				/>
				<img
					className="single-featured-img"
					loading="lazy"
					src={image5}
					alt="Product"
				/>
			</div>
		</>
	);
};

export default SingleProduct;
