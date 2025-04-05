import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import "react-toastify/dist/ReactToastify.css";
import BASE_API from "../../services/axiosHelp";

const ServicesManage = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await BASE_API.get("api/get-services");
				console.log(response.data);
				setServices(response.data);
			} catch (error) {
				toast.error(
					`Failed to fetch services: ${error.message}. Please try again.`
				);
			}
		};
		fetchServices();
	}, []);

	const handleDelete = (id) => async () => {
		if (window.confirm("Are you sure you want to delete this service?")) {
			setLoading(true);
			try {
				await BASE_API.post(`api/delete-service/${id}`);
				setServices((prevServices) =>
					prevServices.filter((service) => service._id !== id)
				);
				toast.success("Service deleted successfully!");
			} catch (error) {
				toast.error(
					`Failed to delete service: ${error.message}. Please try again.`
				);
			} finally {
				setLoading(false);
			}
		}
	};
	const handleAddNewService = () => {
		navigate("/admin/add-new-service");
	};

	const handleEditService = (id) => {
		console.log("TRIGGERED", id);
		navigate(`/admin/edit-service/${id}`);
	};

	return (
		<div className="bg-gray-100 min-h-screen">
			<AdminHeader />
			<div className="container mx-auto p-4 pt-6 mt-6">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-bold mb-4">Services Management</h2>
					<button
						className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
						onClick={handleAddNewService}
					>
						Add New Service
					</button>
				</div>
				<div className="bg-white shadow-md rounded-lg p-6">
					<h3 className="text-xl font-semibold mb-4">Manage Services</h3>
					{loading ? (
						<p>Loading...</p>
					) : (
						<table className="min-w-full bg-white border border-gray-300">
							<thead>
								<tr>
									<th className="border px-4 py-2 bg-blue-600 text-white">
										Title
									</th>
									<th className="border px-4 py-2 bg-cyan-600 text-white">
										Details
									</th>
									<th className="border px-4 py-2 bg-green-600 text-white">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{services.map((service) => (
									<tr key={service._id}>
										<td className="border px-4 py-2">{service.title}</td>
										<td className="border px-4 py-2">{service.details}</td>
										<td className="border px-4 py-2">
											<button
												onClick={() => handleEditService(service._id)}
												className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
											>
												Edit
											</button>
											<button
												className="bg-red-500 text-white px-4 py-2 rounded-lg"
												onClick={handleDelete(service._id)}
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					)}
				</div>
			</div>
		</div>
	);
};

export default ServicesManage;
