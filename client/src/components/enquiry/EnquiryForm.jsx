import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const services = [
	"Quit Smoking",
	"Weight Loss (Virtual Gastric Banding)",
	"Weight Loss Group Classes",
	"Self Esteem & Confidence",
	"Anger Management",
	"Fears & Phobias",
	"Loss & Grief",
	"Motivation",
	"Stress & Anxiety",
	"Depression",
	"Public Speaking",
	"Other",
	"Follow Up Session",
];

const EnquiryForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const [buttonText, setButtonText] = useState("Submit");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	const onSubmit = async (data) => {
		setButtonText("Submitting...");
		setLoading(true);
		try {
			await axios.post(
				`${import.meta.env.VITE_REACT_BACKEND_URL}/api/enquiry`,
				data
			);
			toast.success("Enquiry submitted successfully!");
			reset();
			setButtonText("Submit");
			setTimeout(() => {
				navigate("/");
			}, 1000);
		} catch (error) {
			toast.error(
				`Failed to submit enquiry: ${error.message}. Please try again.`
			);
			setButtonText("Submit");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-yellow-300 via-gray-300 to-gray-400 py-16 bg-no-repeat bg-cover bg-center bg-fixed">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center text-white mb-8">
					Make an Enquiry
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="max-w-lg mx-auto bg-white p-12 rounded-lg shadow-2xl"
				>
					<div className="mb-4">
						<label
							className="block text-cyan-500 font-bold mb-2"
							htmlFor="name"
						>
							Name
						</label>
						<input
							type="text"
							id="name"
							{...register("name", { required: "Name is required" })}
							className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
								errors.name ? "border-red-500" : "border-gray-300"
							}`}
						/>
						{errors.name && (
							<p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
						)}
					</div>
					<div className="mb-4">
						<label
							className="block text-cyan-500 font-bold mb-2"
							htmlFor="phone"
						>
							Phone Number
						</label>
						<input
							type="tel"
							id="phone"
							{...register("phone", { required: "Phone number is required" })}
							className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
								errors.phone ? "border-red-500" : "border-gray-300"
							}`}
						/>
						{errors.phone && (
							<p className="text-red-500 text-sm mt-1">
								{errors.phone.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label
							className="block text-cyan-500 font-bold mb-2"
							htmlFor="email"
						>
							Email Address
						</label>
						<input
							type="email"
							id="email"
							{...register("email", {
								required: "Email address is required",
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
									message: "Invalid email address",
								},
							})}
							className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
								errors.email ? "border-red-500" : "border-gray-300"
							}`}
						/>
						{errors.email && (
							<p className="text-cyan-500 text-sm mt-1">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label
							className="block text-cyan-500 font-bold mb-2"
							htmlFor="service"
						>
							Service
						</label>
						<select
							id="service"
							{...register("service", { required: "Service is required" })}
							className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
								errors.service ? "border-red-500" : "border-gray-300"
							}`}
						>
							{services.map((service) => (
								<option key={service} value={service}>
									{service}
								</option>
							))}
						</select>
						{errors.service && (
							<p className="text-red-500 text-sm mt-1">
								{errors.service.message}
							</p>
						)}
					</div>
					<div className="mb-4">
						<label
							className="block text-cyan-500 font-bold mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							id="message"
							{...register("message", { required: "Message is required" })}
							className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 ${
								errors.message ? "border-red-500" : "border-gray-300"
							}`}
							rows="5"
						></textarea>
						{errors.message && (
							<p className="text-red-500 text-sm mt-1">
								{errors.message.message}
							</p>
						)}
					</div>
					<div className="text-center">
						<button
							type="submit"
							className={`bg-yellow-500 text-cyan-600 ${
								loading
									? "cursor-wait bg-yellow-300 hover:bg-yellow-300"
									: "cursor-pointer"
							} font-bold py-2 px-4 w-full rounded-lg shadow-md hover:bg-blue-700 hover:text-white transition duration-300`}
							disabled={loading}
						>
							{loading ? "Submitting..." : buttonText}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EnquiryForm;
