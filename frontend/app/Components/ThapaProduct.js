import React from "react";
import { NavLink } from "react-router-dom";
// import Rating from "./Rating";
import FormatPrice from "../Helpers/FormatPrice";
// import Image from "next/image";

const ThapaProduct = (curElem) => {
	const { id, name, images, price, rating, reviews } = curElem;
	console.log(id, rating, reviews);

	return (
		<>
			<NavLink to={`/singleproduct/${name}`}>
				<div className="individual-product">
					<div className="imgcontainer">
						<figure>
							<div>
								<img loading="lazy" src={images[0]} alt="Product" />
							</div>
						</figure>
					</div>
					<div className="nameprice">
						<h3
							className="nameprice-h3"
						>
							{name}
						</h3>

						<p>
							<span className="product-price">
								{<FormatPrice price={price}/>}
							</span>{" "}
						</p>
						{/* <Rating rating={rating} numReviews={reviews} /> */}
						{/* <a href="#">
							<button type="button" id="_3D-model">
								View 3D Model
							</button>
						</a> */}
						{/* <Link to={`/singleproduct/${name}`}>
							<button type="button" id="quick-view">
								Quick View
							</button>
						</Link> */}
					</div>
				</div>
			</NavLink>
		</>
	);
};

export default ThapaProduct;
