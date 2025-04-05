import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import BASE_API from "../../services/axiosHelp";
import AdminHeader from "./AdminHeader";

const AddNewServices = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm();

	const onSubmit = async (data) => {
		try {
			await BASE_API.post("/api/add-service", data);
			toast.success("Service added successfully!");
			reset();
			window.location.href = "/admin/services";
		} catch (error) {
			toast.error(`Failed to add service: ${error.message}`);
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
						Add New Service
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
							placeholder="Enter service title"
						/>
						{errors.title && (
							<p className="text-red-500 text-sm mt-1">
								{errors.title.message}
							</p>
						)}
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium mb-1" htmlFor="details">
							Details
						</label>
						<textarea
							id="details"
							{...register("details", { required: "Details are required" })}
							className={`w-full border px-3 py-2 rounded-lg ${
								errors.details ? "border-red-500" : "border-gray-300"
							}`}
							placeholder="Enter service details"
							rows={4}
						/>
						{errors.details && (
							<p className="text-red-500 text-sm mt-1">
								{errors.details.message}
							</p>
						)}
					</div>

					<button
						type="submit"
						className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Submitting..." : "Add Service"}
					</button>
				</form>
			</div>
		</>
	);
};

export default AddNewServices;
