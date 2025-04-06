import { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import Header from "../components/common_components/Header";
import Footer from "../components/common_components/Footer";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/outline";
import BASE_API from "../services/axiosHelp";
import "../services/loader.css"; // Importing the loader CSS
const Services = () => {
	const location = useLocation();
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchAllServices = async () => {
			try {
				const response = await BASE_API.get(`/api/admin/get-services`);
				setServices(response.data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching services:", error);
			}
		};
		fetchAllServices();
	}, [location]);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	return (
		<div>
			<Header />
			<motion.section
				initial="hidden"
				animate="visible"
				variants={containerVariants}
				className="py-16 bg-gradient-to-b from-blue-50 text-white"
			>
				<motion.div
					className="container mx-auto px-6 lg:px-12"
					variants={containerVariants}
				>
					{/* Title Section */}
					<motion.h2
						className="text-4xl md:text-5xl text-yellow-600 font-bold mb-10 text-center"
						variants={itemVariants}
					>
						Our Services
					</motion.h2>
					{loading ? (
						<div className="flex justify-center items-center min-h-[200px]">
							<div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
							<p className="ml-4 text-gray-600">Loading Services...</p>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{services.map((service, index) => (
								<motion.div
									key={index}
									className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
									variants={itemVariants}
									whileHover={{ y: -5 }}
								>
									<motion.div
										className="text-4xl text-indigo-600 mb-4"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
									>
										<CheckCircleIcon className="h-10 w-10 text-yellow-600" />
									</motion.div>
									<h3 className="text-xl font-semibold mb-2 text-yellow-600">
										{service.title}
									</h3>
									<p className="text-gray-600">{service.details}</p>
								</motion.div>
							))}
						</div>
					)}
					{/* CTA Button */}
					<motion.div
						className="mt-12 text-center"
						variants={itemVariants}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<NavLink
							to="/enquiry"
							className="inline-flex items-center px-8 py-4 text-lg font-semibold text-indigo-900 bg-white rounded-full shadow-xl hover:bg-gray-100 transform transition-all duration-300 hover:shadow-2xl"
						>
							<FaCalendarAlt className="mr-2" />
							Make an Enquiry Now
						</NavLink>
					</motion.div>
				</motion.div>
			</motion.section>
			<Footer />
		</div>
	);
};

export default Services;
