import React from "react";

const ContactScreen = () => {
	return (
		<>
			<div id="contact-screen">
				<div id="contact-screen-div1">
					<div id="xyz1">
						<p id="contact-screen-contact">Contact Us:</p>
						<p id="xyz2">We are at your side for all your needs.</p>
					</div>

					<div id="contact-screen-location">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path>
						</svg>
						<div id="xyz3">
							<p>Location:</p>
							<p>Trimohoni Haji Bari, NandiPara, Khilgaon, Dhaka</p>
						</div>
					</div>
					<a href="tel: +880 1708-006378">
						<div id="contact-screen-phone">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path d="M21 8C22.1046 8 23 8.89543 23 10V14C23 15.1046 22.1046 16 21 16H19.9381C19.446 19.9463 16.0796 23 12 23V21C15.3137 21 18 18.3137 18 15V9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9V16H3C1.89543 16 1 15.1046 1 14V10C1 8.89543 1.89543 8 3 8H4.06189C4.55399 4.05369 7.92038 1 12 1C16.0796 1 19.446 4.05369 19.9381 8H21ZM7.75944 15.7849L8.81958 14.0887C9.74161 14.6662 10.8318 15 12 15C13.1682 15 14.2584 14.6662 15.1804 14.0887L16.2406 15.7849C15.0112 16.5549 13.5576 17 12 17C10.4424 17 8.98882 16.5549 7.75944 15.7849Z"></path>
								</svg>
							</div>
							<div id="xyz4">
								<p id="contact-screen-mobile">Mobile Number</p>
								<p>+880 1812669952</p>
							</div>
						</div>
					</a>
				</div>
				<form
					action="https://formspree.io/f/xzbnrqod"
					method="POST"
					id="contact-screen-div2"
				>
					<p>Name:</p>
					<input
						className="text-area"
						placeholder="username"
						name="username"
						required
						autoComplete="off"
					/>
					<p>Email:</p>
					<input
						className="text-area"
						placeholder="Email"
						name="email"
						required
						autoComplete="off"
					/>
					<p>Message:</p>
					<textarea className="text-area" placeholder="Message" />
					<input id="send-button" type="submit" value="send" />
				</form>
			</div>
			<div id="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2171.357535841731!2d90.45561981852781!3d23.75545384013509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b7fb8d9b08ef%3A0x74881064bd8c7cad!2z4Ka54Ka-4Kac4KeAIOCmrOCmvuCnnOCmvyDgpq7gp4vgp5w!5e0!3m2!1sen!2sbd!4v1707419437834!5m2!1sen!2sbd"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</>
	);
};

export default ContactScreen;

{
	/* <img src="/logo.jpg" /> */
}
