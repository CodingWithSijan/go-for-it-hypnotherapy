import { useForm } from "react-hook-form";
import BASE_API from "../../services/axiosHelp";
import AdminHeader from "./AdminHeader";
import { handleError, handleSuccess } from "../../utils/utils";

const AddNewPricing = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			await BASE_API.post("/api/admin/add-pricing", data);
			handleSuccess("Pricing plan added successfully!");
			reset();
			window.location.href = "/admin/pricing";
		} catch (error) {
			handleError(`Failed to add pricing plan: ${error.message}`);
		}
	};

	return (
		<>
			<AdminHeader />
			<div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="bg-white w-full max-w-md p-6 rounded-lg shadow-md"
				>
					<h2 className="text-2xl font-bold mb-4 text-center">
						Add New Pricing Plan
					</h2>

					<div className="mb-4">
						<label className="block text-sm font-medium mb-1" htmlFor="title">
							Title
						</label>
						<input
							id="title"
							{...register("title", { required: "Title is required" })}
							className={`w-full border px-3 py-2 rounded-lg ${
								errors.title ? "border-red-500" : "border-gray-300"
							}`}
							placeholder="Enter pricing title"
						/>
						{errors.title && (
							<p className="text-red-500 text-sm mt-1">
								{errors.title.message}
							</p>
						)}
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium mb-1" htmlFor="price">
							Price ($)
						</label>
						<input
							id="price"
							{...register("price", { required: "Price is required" })}
							className={`w-full border px-3 py-2 rounded-lg ${
								errors.price ? "border-red-500" : "border-gray-300"
							}`}
							placeholder="Enter price"
						/>
						{errors.price && (
							<p className="text-red-500 text-sm mt-1">
								{errors.price.message}
							</p>
						)}
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium mb-1"
							htmlFor="duration"
						>
							Duration
						</label>
						<input
							id="duration"
							{...register("duration", {
								required: "Duration is required",
							})}
							className={`w-full border px-3 py-2 rounded-lg ${
								errors.duration ? "border-red-500" : "border-gray-300"
							}`}
							placeholder="e.g., 1 month, 4 sessions"
						/>
						{errors.duration && (
							<p className="text-red-500 text-sm mt-1">
								{errors.duration.message}
							</p>
						)}
					</div>

					<div className="mb-4">
						<label
							className="block text-sm font-medium mb-1"
							htmlFor="description"
						>
							Description
						</label>
						<textarea
							id="description"
							rows={4}
							{...register("description", {
								required: "Description is required",
							})}
							className={`w-full border px-3 py-2 rounded-lg ${
								errors.description ? "border-red-500" : "border-gray-300"
							}`}
							placeholder="Enter pricing description"
						/>
						{errors.description && (
							<p className="text-red-500 text-sm mt-1">
								{errors.description.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Submitting..." : "Add Pricing"}
					</button>
				</form>
			</div>
		</>
	);
};

export default AddNewPricing;
