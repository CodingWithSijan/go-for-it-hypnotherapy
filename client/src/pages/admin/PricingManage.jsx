import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import "react-toastify/dist/ReactToastify.css";
import BASE_API from "../../services/axiosHelp";

const PricingManage = () => {
	const location = useLocation();
	const [pricingPlans, setPricingPlans] = useState([]);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchPricing = async () => {
			try {
				const response = await BASE_API.get("api/admin/get-all-pricing");
				setPricingPlans(response.data);
				setLoading(false);
			} catch (error) {
				toast.error(`Failed to fetch pricing plans: ${error.message}`);
			}
		};
		fetchPricing();
	}, [location]);

	const handleDelete = (id) => async () => {
		if (window.confirm("Are you sure you want to delete this pricing plan?")) {
			setLoading(true);
			try {
				await BASE_API.post(`api/admin/delete-pricing/${id}`);
				setPricingPlans((prev) => prev.filter((plan) => plan._id !== id));
				toast.success("Pricing plan deleted successfully!");
			} catch (error) {
				toast.error(`Failed to delete: ${error.message}`);
			} finally {
				setLoading(false);
			}
		}
	};

	const handleAddNewPricing = () => {
		navigate("/admin/add-new-pricing");
	};

	const handleEditPricing = (id) => {
		navigate(`/admin/edit-pricing/${id}`);
	};

	return (
		<div className="bg-gray-100 min-h-screen">
			<AdminHeader />
			<div className="container mx-auto p-4 pt-6 mt-6">
				<div className="flex justify-between items-center mb-4">
					<h2 className="text-2xl font-bold mb-4">Pricing Management</h2>
					<button
						className="bg-green-500 text-white px-4 py-2 rounded-lg"
						onClick={handleAddNewPricing}
					>
						Add New Pricing
					</button>
				</div>
				<div className="bg-white shadow-md rounded-lg p-6">
					<h3 className="text-xl font-semibold mb-4">Manage Pricing Plans</h3>
					{loading ? (
						<p>Loading...</p>
					) : (
						<table className="min-w-full bg-white border border-gray-300 text-sm">
							<thead>
								<tr>
									<th className="border px-4 py-2 bg-blue-600 text-white">
										Title
									</th>
									<th className="border px-4 py-2 bg-cyan-600 text-white">
										Price
									</th>
									<th className="border px-4 py-2 bg-purple-600 text-white">
										Duration
									</th>
									<th className="border px-4 py-2 bg-gray-700 text-white">
										Description
									</th>
									<th className="border px-4 py-2 bg-green-600 text-white">
										Actions
									</th>
								</tr>
							</thead>
							<tbody>
								{pricingPlans.map((plan) => (
									<tr key={plan._id}>
										<td className="border px-4 py-2">{plan.title}</td>
										<td className="border px-4 py-2">{plan.price}</td>
										<td className="border px-4 py-2">{plan.duration}</td>
										<td className="border px-4 py-2">{plan.description}</td>
										<td className="border px-4 py-2">
											<button
												onClick={() => handleEditPricing(plan._id)}
												className="bg-yellow-500 text-white px-3 py-1 rounded-lg mr-2"
											>
												Edit
											</button>
											<button
												onClick={handleDelete(plan._id)}
												className="bg-red-500 text-white px-3 py-1 rounded-lg"
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

export default PricingManage;
