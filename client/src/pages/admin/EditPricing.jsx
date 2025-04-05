import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BASE_API from "../../services/axiosHelp";
import { handleError } from "../../utils/utils";

const EditPricing = () => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [duration, setDuration] = useState("");
	const [description, setDescription] = useState("");

	const { id } = useParams();

	useEffect(() => {
		const fetchPricingById = async () => {
			try {
				const response = await BASE_API.get(`api/admin/get-pricingbyid/${id}`);
				const data = response.data;
				setTitle(data.title);
				setPrice(data.price);
				setDuration(data.duration);
				setDescription(data.description);
			} catch (error) {
				handleError(`Failed to fetch pricing: ${error.message}`);
			}
		};
		fetchPricingById();
	}, []);

	const handleUpdate = () => {
		const updatePricing = async () => {
			try {
				await BASE_API.patch(`api/admin/update-pricing/${id}`, {
					title,
					price,
					duration,
					description,
				});
				alert("Pricing updated successfully!");
				window.location.href = "/admin/pricing";
			} catch (error) {
				handleError(`Failed to update pricing: ${error.message}`);
			}
		};
		updatePricing();
	};

	const handleClear = () => {
		setTitle("");
		setPrice("");
		setDuration("");
		setDescription("");
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-4">
			<h2 className="text-xl font-bold text-center">Edit Pricing Plan</h2>

			<div>
				<label className="block mb-1 font-medium">Title</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
					placeholder="Enter title"
				/>
			</div>

			<div>
				<label className="block mb-1 font-medium">Price ($)</label>
				<input
					type="text"
					value={price}
					onChange={(e) => setPrice(e.target.value)}
					className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
					placeholder="Enter price"
				/>
			</div>

			<div>
				<label className="block mb-1 font-medium">Duration</label>
				<input
					type="text"
					value={duration}
					onChange={(e) => setDuration(e.target.value)}
					className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
					placeholder="e.g., 1 month / 3 sessions"
				/>
			</div>

			<div>
				<label className="block mb-1 font-medium">Description</label>
				<textarea
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring focus:ring-blue-300"
					placeholder="Enter description"
				/>
			</div>

			<div className="flex justify-between gap-4">
				<button
					onClick={handleUpdate}
					className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
				>
					Update
				</button>
				<button
					onClick={handleClear}
					className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
				>
					Clear All
				</button>
			</div>
		</div>
	);
};

export default EditPricing;
