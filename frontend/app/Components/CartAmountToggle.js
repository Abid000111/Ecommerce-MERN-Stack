import React from "react";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
	return (
		<>
			<div id="product-quantity">
				<p id="product-quantity-p1">Quantity:</p>
				<span className="_minus">
					<svg
						className="minus"
						onClick={() => setDecrease()}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M5 11V13H19V11H5Z"></path>
					</svg>
				</span>
				<div className="quantity-amount">{amount}</div>
				<span className="_plus">
					<svg
						className="plus"
						onClick={() => setIncrease()}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
					>
						<path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
					</svg>
				</span>
			</div>
		</>
	);
};

export default CartAmountToggle;
