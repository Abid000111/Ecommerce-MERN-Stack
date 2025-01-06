const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: [true, "price must be provided"]
	},
	colors: {
		type: Array,
		required: true
	},
	size: {
		type: Array,
		required: true
	},
	featured: {
		type: Boolean,
		default: false
	},
	rating: {
		type: Number,
		default: 4.9
	},
	reviews: {
		type: Number
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	origin: {
		type: String,
		enum: {
			values: ["Vietnam", "China"],
			message: `{VALUE} is not supported`
		}
	},
	description: {
		type: String,
		required: true
	},
	images: {
		type: Array,
		required: true
	},
	stock: {
		type: Number,
		required: true
	},
	materials: {
		type: String,
		required: "true"
	},
	shipping: {
		type: String,
		required: true
	},
	model_link: {
		type: String,
		require: true
	}
});

module.exports = mongoose.model("Product", productSchema);
