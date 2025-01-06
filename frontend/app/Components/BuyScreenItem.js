import React  from "react";
// import { useCartContext } from "../Context/cart_context";
import FormatPrice from "../Helpers/FormatPrice";
// import Image from "next/image";

const BuyScreenItem = (curElem) => {
	const { name, price, image, amount, color, size, total_price } = curElem;
	// const { orderInfo, cart } = useCartContext();
	// const [couponCode, setCouponCode] = useState("");
	// console.log("orderInfo ...=>", orderInfo);
	// console.log("cartInfo ...=>", cart);
	console.log(total_price);

	return (
		<>
			<div className="order-description-info-container">
				<div className="order-description-info">
					<div className="order-img">
						{/* <img src={orderInfo.image} /> */}
						<img src={image} alt="#" />
						<div className="order-product-quantity">{amount}</div>
					</div>
					<div>
						<div className="order-name">{name}</div>
						<div className="order-size-color-div">
							<p className="order-size">Size: {size}</p>
							<div className="order-color-div">
								<p>Color: </p>
								<div
									style={{
										backgroundColor: color,
										border: "2px solid",
										height: "1rem",
										width: "1rem",
										borderRadius: "50px"
									}}
								></div>
							</div>
						</div>
						<div className="order-price">
							<FormatPrice price={price * amount} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BuyScreenItem;
