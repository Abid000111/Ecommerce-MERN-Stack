const mongoose = require("mongoose");

// const uri = "mongodb+srv://bealphaa17:nyZalqh6whqURD4I@bealphaa.zbhtnr0.mongodb.net/BeAlphaa?retryWrites=true&w=majority";

const connectDB = (uri) => {
	console.log("connect DB");
	return mongoose.connect(uri);
};

module.exports = connectDB;
