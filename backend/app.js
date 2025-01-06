require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5001;

const products_routes = require("./routes/products");
const { sendOrderConfirmationEmail } = require("./controllers/email");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hi, I am live");
});

// app.get("/email", sendTestEmail);

app.post("/email", (req, res) => {
	sendOrderConfirmationEmail(req, res); // Wrap the function call inside an anonymous function
});

// app.get("/api/products/order", (req, res) => {
// 	res.send("Hi, I am live");
// });

// middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URL);
		app.listen(PORT, () => {
			console.log(`${PORT} Yes I am connected`);
		});
	} catch (error) {
		console.log(error);
	}
};

start();
