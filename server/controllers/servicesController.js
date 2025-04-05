const Services = require("../models/Services");

exports.getAllServices = async (_, res) => {
	try {
		const services = await Services.find({});
		res.status(200).json(services);
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
exports.getServiceById = async (req, res) => {
	const { id } = req.params;
	try {
		const service = await Services.findById(id);
		console.log(id);
		res.status(200).json(service);
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};

exports.createService = async (req, res) => {
	const { title, details } = req.body;

	try {
		const newService = new Services({
			title,
			details,
		});
		await newService.save();
		res.status(201).json({ message: "Service created successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
exports.updateService = async (req, res) => {
	const { id } = req.params;
	const { title, details } = req.body;

	try {
		const updatedService = await Services.findByIdAndUpdate(
			id,
			{ title, details },
			{ new: true }
		);

		if (!updatedService) {
			return res.status(404).json({ message: "Service not found" });
		}

		res.status(200).json({ message: "Service updated successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
exports.deleteService = async (req, res) => {
	const { id } = req.params;

	try {
		const deleteService = await Services.findByIdAndDelete(id);
		console.log(deleteService);
		if (!deleteService) {
			return res.status(404).json({ message: "Service not found" });
		} else {
			res.status(200).json({ message: "Service deleted successfully" });
		}
	} catch (error) {
		res.status(500).json({ message: "Server Error", error: error.message });
	}
};
