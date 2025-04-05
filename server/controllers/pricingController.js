const Pricing = require("../models/Pricing");

exports.getAllPricing = async (__, res) => {
	try {
		const pricing = await Pricing.find({});
		res.status(200).json(pricing);
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
exports.addNewPricing = async (req, res) => {
	const { title, price, duration, description } = req.body;
	try {
		const newPricing = new Pricing({
			title,
			price,
			duration,
			description,
		});
		await newPricing.save();
		res.status(201).json({ message: "Pricing created successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
