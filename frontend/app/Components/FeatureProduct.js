import React from "react";
import { useProductContext } from "../Context/productcontext";
import ThapaProduct from "./ThapaProduct";

const FeatureProduct = () => {
	const { featureProducts } = useProductContext();
	// console.log("Feature Product => ", featureProducts);

	return (
		<>
			<div id="screen-imgslide">
				<div className="imgslide">
					{featureProducts.map((curElem) => {
						return <ThapaProduct key={curElem.id} {...curElem} />;
					})}
				</div>
			</div>
		</>
	);
};

export default FeatureProduct;
