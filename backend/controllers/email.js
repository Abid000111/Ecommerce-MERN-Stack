// controllers/email.js
const nodemailer = require("nodemailer");

const sendOrderConfirmationEmail = async (req, res) => {
	const { customerEmail, orderDetails, customerInfo } = req.body;
	// const { name, color, size, price, amount } = orderDetails;
	try {
		let transporter = nodemailer.createTransport({
			// Your email service configuration
			host: "smtp-relay.brevo.com",
			port: 587,
			auth: {
				user: "bealphaa17@gmail.com",
				pass: "wmvP40RMQ8SVOq6h"
			}
		});

		let htmlContent = "<h1>Order Confirmation</h1>";
		htmlContent +=
			"<p>Thank you for your order. Here is your order details:</p>";

		orderDetails.forEach((product) => {
			htmlContent += `
                <div style="margin-bottom: 20px;">
                    <img src="${product.image}" alt="${product.name}" style="max-width: 100px;"/>
                    <p><strong>Product:</strong> ${product.name}</p>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <p><strong>Color:</strong> <div style="width: 1rem; height: 1rem; border: 2px solid black; border-radius: 50px; background-color: ${product.color}; margin-left: 0.5rem;"></div></p>
                    </div>
                    <p><strong>Size:</strong> ${product.size}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Quantity:</strong> ${product.amount}</p>
                </div>
            `;
		});

		let htmlContent2 = "<h1>New Order</h1>";
		htmlContent2 += "<h1>CUstomer Details:</h1>";
		htmlContent2 += `<p>Name: ${customerInfo.name}</p>`;
		htmlContent2 += `<p>Email: ${customerInfo.email}</p>`;
		htmlContent2 += `<p>Address: ${customerInfo.address}</p>`;
		htmlContent2 += `<p>City: ${customerInfo.city}</p>`;
		htmlContent2 += `<p>Postal Code: ${customerInfo.postalCode}</p>`;
		htmlContent2 += `<p>Mobile Number: ${customerInfo.mobile_number}</p>`;
		htmlContent2 += `<p>Delivery Area: ${customerInfo.delivery_area}</p>`;
		htmlContent2 += `<p>Shipping Fee: ${customerInfo.shipping}</p>`;
		htmlContent2 += `<p>Payment Method: ${customerInfo.payment_method}</p>`;
		htmlContent2 += `<p>Transection ID: ${customerInfo.transectionId}</p>`;
		htmlContent2 += "<h1>Order Details</h1>";

		orderDetails.forEach((product) => {
			htmlContent2 += `
                <div style="margin-bottom: 20px;">
                    <img src="${product.image}" alt="${product.name}" style="max-width: 100px;"/>
                    <p><strong>Product:</strong> ${product.name}</p>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <p><strong>Color:</strong> <div style="width: 1rem; height: 1rem; border: 2px solid black; border-radius: 50px; background-color: ${product.color}; margin-left: 0.5rem;"></div></p>
                    </div>
                    <p><strong>Size:</strong> ${product.size}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Quantity:</strong> ${product.amount}</p>
                </div>
            `;
		});

		let info = await transporter.sendMail({
			from: "'BeAlphaa' <bealphaa17@gmail.com>",
			to: customerEmail,
			subject: "Order Confirmation",
			html: htmlContent
		});

		let info2 = await transporter.sendMail({
			from: "'BeAlphaa' <bealphaa17@gmail.com>",
			to: "alifalpha17@gmail.com",
			subject: "New Order",
			html: htmlContent2
		});

		// await transporter.sendMail(mailOptions);
		console.log("Message sent: %s", info.messageId);
		console.log("order details =>", orderDetails);
		console.log("customer details =>", customerInfo);
		res.json(info);
		// res.json(info2);
	} catch (error) {
		console.error("Error sending email:", error);
		throw new Error("Error sending email");
	}
};

const testEmail = async (req, res) => {
	let transporter = await nodemailer.createTransport({
		host: "smtp-relay.brevo.com",
		port: 587,
		auth: {
			user: "bealphaa17@gmail.com",
			pass: "wmvP40RMQ8SVOq6h"
		}
	});

	let info = await transporter.sendMail({
		from: "'BeAlphaa' <bealphaa17@gmail.com>",
		to: "abidofficial0001@gmail.com",
		subject: "order confirmed",
		text: "your order is confirmed",
		html: "<b>Hello Abid</b>"
	});

	console.log("Message sent: %s", info.messageId);

	res.json(info);
};

// module.exports = { sendOrderConfirmationEmail };
module.exports = { sendOrderConfirmationEmail, testEmail };
