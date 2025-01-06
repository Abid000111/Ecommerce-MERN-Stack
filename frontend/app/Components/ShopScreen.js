import React from "react";
import { useProductContext } from "../Context/productcontext";
import ThapaProduct from "./ThapaProduct";
import FeatureProduct from "./FeatureProduct";

const ShopScreen = () => {
	const { isLoading, products, filter_products } = useProductContext();

	// console.log("Products => ", products);
	console.log("Filter Products =>", filter_products);
	console.log("products => ",products);

	return (
		<>
			<FeatureProduct />
			<div className="shop-upper">
				<h1 className="shop-h1">Products</h1>
				{/* <form action="#">
					<label htmlFor="sort"></label>
					<select name="sort" id="sort" className="sort-selection" onClick={sorting}>
						<option value="lowest">Price(lowest)</option>
						<option value="#" disabled></option>
						<option value="highest">Price(highest)</option>
						<option value="#" disabled></option>
						<option value="aa-z">Price(a-z)</option>
						<option value="#" disabled></option>
						<option value="z-a">Price(z-a)</option>
					</select>
				</form> */}
			</div>
			<div id="screen-imgslide">
				<div className="imgslide">
					{isLoading ? (
						<p>Loading...</p>
					) : (
						products.map((curElem) => <ThapaProduct key={curElem.id} {...curElem} />)
						// filter_products.map((curElem) => <ThapaProduct key={curElem.id} {...curElem} />)
					)}
				</div>
			</div>
		</>
	);
};

export default ShopScreen;
