const mongoose = require("mongoose");

const PricingSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Pricing", PricingSchema);
