import React, { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/cart_context";

const AddToCart = ({ product, image }) => {
	const {
		addToCart,
		orderInfo,
		order,
		cart,
		buyClick,
		cartScreen,
		setCartScreen
	} = useCartContext();
	const { name, price, id, colors, size, stock, model_link } = product;
	const [color, setColor] = useState(colors[0]);
	const [_size, set_size] = useState(size[0]);
	// console.log("product size =>", _size);

	// console.log("image =>",image)
	// console.log(name, price, id, colors, size, stock);
	const [amount, setAmount] = useState(1);

	const setDecrease = () => {
		amount > 1 ? setAmount(amount - 1) : setAmount(1);
	};

	const setIncrease = () => {
		amount < stock ? setAmount(amount + 1) : setAmount(stock);
	};

	const cartFunc = () => {
		addToCart(name, price, id, color, _size, image, amount, product);
		setCartScreen(!cartScreen);
		setTimeout(() => {
			console.log("cart ==> ", cart);
		}, 2000);
	};

	const buy = () => {
		console.log("order ==> ", orderInfo);
		// addToCart(name, price, id, color, _size, image, amount, product)
		order(name, color, _size, price, amount, image, product);
		buyClick();
	};

	console.log("model_link ==>", model_link);

	return (
		<>
			<div id="product-size">
				<p id="product-size-p1">
					Size:
					<div className="size-box-div">
						{size.map((curSize, index) => {
							return (
								<button
									className={_size === curSize ? "size-box active-size-box" : "size-box"}
									key={index}
									onClick={() => set_size(curSize)}
								>
									{curSize}
								</button>
							);
						})}
					</div>
				</p>
			</div>

			<div id="product-color">
				<p id="product-color-p1">
					Colors:
					{colors.map((curColor, index) => {
						return (
							<button
								key={index}
								className={color === curColor ? "color-box active" : "color-box"}
								style={{ backgroundColor: curColor }}
								onClick={() => setColor(curColor)}
								// onClick={() => handleColorClick(curColor)}
							></button>
						);
					})}
				</p>
			</div>

			<div id="single-cart-toggle">
				<CartAmountToggle
					amount={amount}
					setDecrease={setDecrease}
					setIncrease={setIncrease}
				/>
			</div>

			<div>
				<a href={model_link} target="_blank">
					<button type="button" id="product-screen-3D-model">
						View 3D Model
					</button>
				</a>

				<button
					id="add-to-cart"
					onClick={() =>
						// addToCart(name, price, id, color, _size, image, amount, product)
						cartFunc()
					}
				>
					Add To Cart
				</button>
				<Link to="/buy">
					<button id="buy-now" onClick={buy}>
						Buy Now
					</button>
				</Link>
			</div>
		</>
	);
};

export default AddToCart;
