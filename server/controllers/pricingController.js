const Pricing = require("../models/Pricing");

exports.getAllPricing = async (req, res) => {
	try {
		const pricing = await Pricing.find({});
		res.status(200).json(pricing);
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};

exports.createPricing = async (req, res) => {
	const { title, price, duration, description } = req.body;
	try {
		const pricing = new Pricing({
			title,
			price,
			duration,
			description,
		});
		await pricing.save();
		res.status(201).json({ message: "Pricing created successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
exports.getPricingById = async (req, res) => {
	try {
		const pricing = await Pricing.findById(req.params.id);
		if (!pricing) {
			return res.status(404).json({ message: "Pricing not found" });
		}
		res.status(200).json(pricing);
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
exports.updatePricing = async (req, res) => {
	const { title, price, duration, description } = req.body;
	try {
		const pricing = await Pricing.findByIdAndUpdate(
			req.params.id,
			{
				title,
				price,
				duration,
				description,
			},
			{ new: true }
		);
		if (!pricing) {
			return res.status(404).json({ message: "Pricing not found" });
		}
		res.status(200).json({ message: "Pricing updated successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
exports.deletePricing = async (req, res) => {
	try {
		const pricing = await Pricing.findByIdAndDelete(req.params.id);
		if (!pricing) {
			return res.status(404).json({ message: "Pricing not found" });
		}
		res.status(200).json({ message: "Pricing deleted successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
