// import React from "react";
// import { Link } from "react-router-dom";
// import Rating from "./Rating";

// const Product = ({ product }) => {
// 	return (
// 		<>
// 			<Link to={`/product/${product.slug}`}>
// 				<div key={product.slug} className="individual-product">
// 					<div className="imgcontainer">
// 						<figure>
// 							<div>
// 								<img src={product.image} alt="Product" />
// 							</div>
// 						</figure>
// 					</div>
// 					<div className="nameprice">
// 						<h3
// 							style={{ fontWeight: "bold", fontSize: "1.5rem" }}
// 							className="hover:text-blue-700"
// 						>
// 							{product.name}
// 						</h3>

// 						<p>
// 							<span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
// 								{product.price}
// 							</span>{" "}
// 							BDT
// 						</p>
// 						<Rating rating={product.rating} numReviews={product.numReviews} />
// 						<a href="#">
// 							<button type="button" id="_3D-model">
// 								View 3D Model
// 							</button>
// 						</a>
// 						<Link to={`/product/${product.slug}`}>
// 							<button type="button" id="quick-view">
// 								Quick View
// 							</button>
// 						</Link>
// 					</div>
// 				</div>
// 			</Link>
// 		</>
// 	);
// };

// export default Product;
