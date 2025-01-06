import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
	return (
		<>
			<div className="thankyou-empty"></div>
			<div id="thank-you-div1">Thank you for shopping</div>
			<div className="thankyou-empty2"></div>
			<div id="thank-you-div2">
				<p>
					Your order is in pending. You will get a call about the confirmation of
					order.
				</p>
			</div>
			<div className="button-div">
				<Link to="/shop">
					<button className="continue-shopping">Continue Shopping</button>
				</Link>
			</div>
		</>
	);
};

export default ThankYou;
