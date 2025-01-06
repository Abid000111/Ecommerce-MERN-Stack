/* eslint-disable indent */

import React, { useState } from "react";
import { useCartContext } from "../Context/cart_context";
import BuyScreenItem from "./BuyScreenItem";
import FormatPrice from "../Helpers/FormatPrice";
import axios from "axios";
import { Link } from "react-router-dom";
// import Image from "next/image";

const BuyScreen = () => {
	const { cart, array, total_price, clearCart } = useCartContext();
	const orderArray = JSON.stringify(array);
	console.log("cart info ===>", cart);
	// console.log("order item name ===>", name);
	// console.log(orderInfo.name)
	const [fName, setFName] = useState("");
	const [lName, setLName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [city, setCity] = useState("");
	const [pCode, setPcode] = useState("");
	const [mNumber, setMNumber] = useState("");
	const [shipping, setShipping] = useState(80);
	const [area, setArea] = useState("dhaka");
	const [pay, setPay] = useState("cashOn");
	const [btr, setBtr] = useState(false);
	const [transectionId, setTransectionId] = useState(
		"must enter your transection id here"
	);
	const [ntr, setNtr] = useState(false);
	const [couponCode, setCouponCode] = useState("");
	// const [showMore, setShowMore] = useState(true);

	// const toggleShowMore = () => {
	// 	setShowMore(!showMore);
	// };

	// const _array = [];
	// const array = [..._array, orderInfo];
	// const array = [..._array, ...cart];

	const cashClick = () => {
		setPay("cashOn");
		setBtr(false);
		setNtr(false);
	};

	const bkashClick = () => {
		setPay("bkash");
		setBtr(true);
		setNtr(false);
	};

	const nagadhClick = () => {
		setPay("nagad");
		setBtr(false);
		setNtr(true);
	};

	const shippingFunc1 = () => {
		setArea("dhaka");
		setShipping(80);
	};
	const shippingFunc2 = () => {
		setArea("outside");
		setShipping(100);
	};
	const shippingFunc3 = () => {
		setArea("urgent");
		setShipping(120);
	};

	console.log("array ===>", array);

	const handlePlaceOrder = async () => {
		clearCart();
		try {
			// Prepare order data
			const orderData = {
				customerEmail: email,
				orderDetails: array,

				// customer info
				customerInfo: {
					name: fName + lName,
					email: email,
					address: address,
					city: city,
					postalCode: pCode,
					mobile_number: mNumber,
					delivery_area: area,
					shipping: shipping,
					payment_method: pay,
					transectionId: transectionId
				}
			};

			// Send POST request to backend
			// const response = await axios.post("http://localhost:5001/email", orderData);
			const response = await axios.post("https://bealphaa-server.com.bealphaa.com/email", orderData);
			// const response = await axios.post(
			// 	"https://bealphaa-server.com.bealphaa.com/email",
			// 	orderData
			// );

			// Handle success response
			console.log("email sending response ==>", response.data);
			// Add any additional logic for success (e.g., show success message)
		} catch (error) {
			// Handle error
			console.error("Error placing order:", error);
			// Add any additional logic for error (e.g., show error message)
		}
	};

	return (
		<>
			<div className="buy-screen">
				<div className="order-main">
					<div className="order-product">
						{array.map((curElem, index) => (
							<BuyScreenItem key={index} {...curElem} />
						))}
						<div className="order-description-button">
							<input
								className="coupon-code"
								placeholder="Coupon Code"
								value={couponCode}
								onChange={(e) => setCouponCode(e.target.value)}
							/>
							<div className="order-apply-coupon">Apply Coupon</div>
						</div>
						<p className="order-shipping">
							Shipping: <FormatPrice price={shipping} />
						</p>
						<p className="order-total">
							Total:
							{array[0].total_price !== undefined ? (
								<FormatPrice price={array[0].total_price + shipping} />
							) : (
								<FormatPrice price={total_price + shipping} />
							)}
						</p>
					</div>
				</div>
				<div className="buy-screen-info-div">
					<h1 className="billing-details">Billing Details</h1>
					<form
						// action="https://formspree.io/f/xzbnrqod"
						action="#"
						method="POST"
						id="billing-form"
					>
						<div className="billing-name">
							<input
								placeholder="First Name"
								value={fName}
								onChange={(e) => setFName(e.target.value)}
								name="first_name"
								required
								autoComplete="off"
								className="billing-input-half"
							/>

							<input
								placeholder="Last Name"
								value={lName}
								onChange={(e) => setLName(e.target.value)}
								name="last_name"
								required
								autoComplete="off"
								className="billing-input-half"
							/>
						</div>
						<input
							placeholder="Email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							name="email"
							required
							autoComplete="off"
							className="billing-input"
						/>

						<input
							placeholder="Address"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							name="address"
							required
							autoComplete="off"
							className="billing-input"
						/>

						<div className="billing-city">
							<input
								placeholder="City/District"
								value={city}
								onChange={(e) => setCity(e.target.value)}
								name="city"
								required
								autoComplete="off"
								className="billing-input-half"
							/>
							<input
								placeholder="Postal Code"
								value={pCode}
								onChange={(e) => setPcode(e.target.value)}
								name="postal_code"
								required
								autoComplete="off"
								className="billing-input-half"
							/>
						</div>
						<input
							placeholder="Mobile Number"
							value={mNumber}
							onChange={(e) => setMNumber(e.target.value)}
							name="mobile_number"
							required
							autoComplete="off"
							className="billing-input"
						/>
						<div>
							<div className="shipping-header">
								<div className="shipping-method">Shipping method</div>
								<div
									className="billing-alert"
									style={{ display: shipping ? "none" : "flex" }}
								>
									Select One
								</div>
								{/* <div className="billing-alert">Select One</div> */}
							</div>
							<div className="shipping-container">
								<div
									className={
										area === "dhaka"
											? "shipping-area shipping-area-active"
											: "shipping-area"
									}
									onClick={() => shippingFunc1()}
								>
									<div className="shipping-part1">
										<div
											className={
												area === "dhaka"
													? "shipping-dot shipping-dot-active"
													: "shipping-dot"
											}
										></div>
										<p>Inside Dhaka</p>
									</div>
									<div className="shipping-amount">
										<FormatPrice price={80} />
									</div>
								</div>
								<div
									className={
										area === "outside"
											? "shipping-area shipping-area-active"
											: "shipping-area"
									}
									onClick={() => shippingFunc2()}
								>
									<div className="shipping-part1">
										<div
											className={
												area === "outside"
													? "shipping-dot shipping-dot-active"
													: "shipping-dot"
											}
										></div>
										<p>Outside Dhaka</p>
									</div>
									<div className="shipping-amount">
										<FormatPrice price={100} />
									</div>
								</div>
								<div
									className={
										area === "urgent"
											? "shipping-urgent shipping-urgent-active"
											: "shipping-urgent"
									}
									onClick={() => shippingFunc3()}
								>
									<div className="shipping-part1">
										<div
											className={
												area === "urgent"
													? "shipping-dot shipping-dot-active"
													: "shipping-dot"
											}
										></div>
										<p className="shipping-same-p">
											Same Day Delivery (Only For Dhaka Metro, Saturday to Thursday, Order
											Time-8 PM to 10 AM) Note: Pre Delivery Charge Applicable*
										</p>
									</div>
									<div className="shipping-amount">
										<FormatPrice price={120} />
									</div>
								</div>
							</div>
						</div>

						<div className="pay-header">
							<div className="bill-payment">Payment</div>
							<div
								className="billing-alert"
								style={{ display: pay ? "none" : "flex" }}
							>
								{" "}
								Select One
							</div>
						</div>
						<div className="pay-div">
							<div
								className={
									pay === "cashOn" ? "pay-div-ind pay-div-ind-active" : "pay-div-ind"
								}
								onClick={() => cashClick()}
							>
								<div className="pay-mobile-view">
									<div
										className={pay === "cashOn" ? "pay-dot pay-dot-active" : "pay-dot"}
									></div>
									<div>Cash on delivery</div>
								</div>
							</div>
							<div
								className={
									pay === "bkash" ? "pay-div-ind pay-div-ind-active" : "pay-div-ind"
								}
								onClick={() => bkashClick()}
							>
								<div className="pay-mobile-view">
									<div>
										<div
											className={pay === "bkash" ? "pay-dot pay-dot-active" : "pay-dot"}
										></div>
									</div>
									<div>bKash</div>
									{/* <img src="/bkash.png" /> */}
									<img src="/bkash.png" alt="bkash" />
								</div>
								<div>(Personal: +880 1708006378)</div>
								<div>(Pay the total amount)</div>
							</div>
							<div className="pay-div-ind" style={{ display: btr ? "block" : "none" }}>
								<input
									className="transection-input-half"
									placeholder="Transection Id"
									value={transectionId}
									autoComplete="off"
									required
									onChange={(e) => setTransectionId(e.target.value)}
								/>
							</div>
							<div
								className={
									pay === "nagad" ? "pay-div-ind pay-div-ind-active" : "pay-div-ind"
								}
								onClick={() => nagadhClick()}
							>
								<div className="pay-mobile-view">
									<div>
										<div
											className={pay === "nagad" ? "pay-dot pay-dot-active" : "pay-dot"}
										></div>
									</div>
									<div>Nagad</div>
									<img src="/nagad.png" alt="nagad" />
								</div>
								<div>(Personal: +880 1708006378)</div>
								<div>(Pay the total amount)</div>
							</div>
							<div className="pay-div-ind" style={{ display: ntr ? "block" : "none" }}>
								<input
									className="transection-input-half"
									placeholder="Transection Id"
									value={transectionId}
									autoComplete="off"
									required
									onChange={(e) => setTransectionId(e.target.value)}
								/>
							</div>
						</div>
						<input type="hidden" name={shipping} value={shipping} />
						<input type="hidden" name="Order_List" value={orderArray} />
						{/* <Link to="/gratitude-kr-g4-43">
							<button
								className="order-button"
								onClick={() => {
									handlePlaceOrder();
								}}
							>
								Place Order
							</button>
						</Link> */}

						{fName.trim() !== "" &&
						lName.trim() !== "" &&
						email.trim() !== "" &&
						address.trim() !== "" &&
						city.trim() !== "" &&
						pCode.trim() !== "" &&
						mNumber.trim() !== "" ? (
							<Link to="/gratitude-kr-g4-43">
								<button
									className="order-button"
									onClick={() => {
										handlePlaceOrder();
									}}
								>
									Place Order
								</button>
							</Link>
						) : (
							<button
								className="order-button"
								onClick={() => {
									// Show alert if any required field is empty
									alert("Please fill in all required fields.");
								}}
							>
								Place Order
							</button>
						)}
					</form>
				</div>
			</div>
		</>
	);
};

export default BuyScreen;
