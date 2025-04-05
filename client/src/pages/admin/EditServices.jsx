import { useEffect, useState } from "react";
import { handleError } from "../../utils/utils";
import BASE_API from "../../services/axiosHelp";
import { useParams } from "react-router-dom";
const EditServices = () => {
	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");

	const { id } = useParams(); // Assuming you're using react-router-dom to get the ID from the URL
	console.log("MY ID", id);
	useEffect(() => {
		const fetchServiceById = async () => {
			try {
				const response = await BASE_API.get(`api/get-servicebyid/${id}`);
				setTitle(response.data.title);
				setDetails(response.data.details);
			} catch (error) {
				handleError(
					`Failed to fetch service: ${error.message}. Please try again.`
				);
			}
		};
		fetchServiceById();
	}, []);

	const handleUpdate = () => {
		const updateService = async () => {
			try {
				await BASE_API.patch(`api/update-service/${id}`, {
					title,
					details,
				});
				alert("Service updated successfully!");
			} catch (error) {
				handleError(
					`Failed to update service: ${error.message}. Please try again.`
				);
			}
		};
		updateService();
		alert("Service updated successfully!");
		window.location.href = "/admin/services"; // Reload the page to see the updated data
	};
	const handleClear = () => {
		setTitle("");
		setDetails("");
	};
	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md space-y-4">
			<h2 className="text-xl font-bold text-center">Edit Service</h2>

			<div>
				<label className="block mb-1 font-medium">Title</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
					placeholder="Enter service title"
				/>
			</div>

			<div>
				<label className="block mb-1 font-medium">Details</label>
				<textarea
					value={details}
					onChange={(e) => setDetails(e.target.value)}
					className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:ring focus:ring-blue-300"
					placeholder="Enter service details"
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

export default EditServices;
