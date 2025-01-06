const Product = require("../models/product");

const getAllProducts = async (req, res) => {
	// const Products = await Product.find(req.query);
	// res.status(200).json({ Products });

	const { origin, id, name, featured, sort, select } = req.query;
	const queryObject = {};

	if (origin) {
		queryObject.origin = origin;
	}

	if (featured) {
		queryObject.featured = featured;
	}

	if (id) {
		queryObject.id = id;
	}

	if (name) {
		queryObject.name = { $regex: name, $options: "i" };
		// queryObject.name = name;
	}

	let apiData = Product.find(queryObject);

	if (sort) {
		let sortFix = sort.split(",").join(" ");
		// let sortFix = sort.replace(",", " ");
		apiData = apiData.sort(sortFix);
	}

	if (select) {
		// let selectFix = select.replace(",", " ");
		let selectFix = select.split(",").join(" ");
		apiData = apiData.select(selectFix);
	}

	let page = Number(req.query.page) || 1;
	let limit = Number(req.query.limit) || 9;
	let skip = (page - 1) * limit;
	apiData = apiData.skip(skip).limit(limit);

	console.log(queryObject);

	// const Products = await Product.find(queryObject);
	const Products = await apiData;
	// res.status(200).json({ Products, nbHits: Products.length });
	res.status(200).json({ Products });
};

const getAllProductsTesting = async (req, res) => {
	// res.status(200).json({ msg: "I Am getAllProductsTesting" });
	const Products = await Product.find(req.query).select("name");
	// const Products = await Product.find({origin: "Vietnam"});
	res.status(200).json({ Products });
};

module.exports = { getAllProducts, getAllProductsTesting };
