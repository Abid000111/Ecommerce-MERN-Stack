// import Image from "next/image";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<div id="main">
				<div id="big-header">
					<h1>Be Alphaa</h1>
					<Link to="/shop">
						<button>Start Shopping</button>
					</Link>
				</div>
				<div id="scroller">
					<h1>Be Alphaa gives you a perfect online shopping experience</h1>
					<h1>Be Alphaa gives you a perfect online shopping experience</h1>
				</div>
				<div className="feature-prev-div">
					<div className="feature-container">
						<div>
							<img src="/feature1.jpg" alt="image" />
						</div>
						<div>
							<img src="/feature2.jpg" alt="image" />
						</div>
						<div>
							<img src="/feature3.jpg" alt="image" />
						</div>
						<div>
							<img src="/feature4.jpg" alt="image" />
						</div>
						<div>
							<img src="/feature5.jpg" alt="image" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
