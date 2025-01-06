import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { useCartContext } from "../Context/cart_context";
// import Image from "next/image";

const CartItem = ({ name, id, image, color, price, size, amount }) => {
	const { removeItem, setDecrease, setIncrease } = useCartContext();

	// console.log("cart item size =>", size);
	return (
		<>
			<div className="cart-item">
				<div>
					<figure className="cart-item-img">
						<img src={image} alt="image" />
					</figure>
				</div>
				<div style={{ width: "155px" }}>
					<div>{name}</div>
					<div className="cart-item-div2">
						<div className="cart-item-color-div">
							{/* color */}
							<p>Color:</p>
							<div
								className="color-box active"
								style={{ backgroundColor: color, color: "color" }}
							></div>
						</div>
						<div className="cart-item-size-div">
							{/* size */}
							<p className="cart-item-size-p">Size:</p>
							<div>{size}</div>
						</div>
					</div>
					<div>
						<div id="cart-screen-cart-toggle">
							<CartAmountToggle
								amount={amount}
								setDecrease={() => setDecrease(id)}
								setIncrease={() => setIncrease(id)}
							/>
						</div>
						<div className="cart-item-last-div">
							<FormatPrice price={price * amount} />
							<svg
								className="cart-item-delete"
								onClick={() => removeItem(id)}
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartItem;
