import stellaImage from "../../assets/stella_profile_picture.jpg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const StellaIntroduction = () => {
	const location = useLocation();
	const [titles, setTitles] = useState([]);
	const [hypnotherapyBenefits, setHypnotherapyBenefits] = useState([]);
	useEffect(() => {
		const fetchServices = async () => {
			try {
				const response = await axios.get(
					`${import.meta.env.VITE_REACT_BACKEND_URL}/api/admin/get-services`
				);
				if (response.status === 200) {
					console.log(response.data);

					setTitles(response.data.map((service) => service.title));
					const tempTitles = titles.filter(
						(title) =>
							!title.toLowerCase().includes("follow up session") &&
							!title.toLowerCase().includes("other")
					);
					setHypnotherapyBenefits(tempTitles);
					console.log("Filtered Titles:", tempTitles);
				} else {
					console.log("Error fetching services data:", response.statusText);
				}
			} catch (error) {
				console.log(`Failed to fetch services: ${error.message}`);
			}
		};
		fetchServices();
	}, [location, titles]);

	const qualifications = [
		"Clinical Hypnotherapist",
		"Ego State Therapy",
		"NLP",
		"TimeLine Therapy",
		"Member of AACHP",
		"Accredited Clinical Supervisor",
		"Member of NHRA",
		"National Guild of Hypnotherapists",
	];

	return (
		<section className="py-16 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-100 text-[#1D2C60]">
			<div className="container mx-auto px-6 lg:px-12">
				{/* Title Section */}
				<h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-[#1D2C60] animate__animated animate__fadeIn">
					Meet Stella Dichiera
				</h2>

				<div className="flex flex-col lg:flex-row items-center justify-between gap-12">
					{/* Image Section */}
					<div className="flex justify-center lg:w-1/2 animate__animated animate__fadeInLeft">
						<img
							src={stellaImage}
							alt="Stella Dichiera"
							className="rounded-full w-56 h-56 lg:w-72 lg:h-72 border-8 border-white shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:shadow-2xl"
						/>
					</div>

					{/* Introduction Text */}
					<div className="text-center lg:text-left lg:w-1/2 animate__animated animate__fadeInRight">
						<p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
							Stella Dichiera is a professional hypnotherapist based in Moonee
							Ponds, Victoria. She specializes in helping clients quit smoking,
							manage anxiety, overcome depression, and achieve lasting weight
							loss through personalized therapy sessions.
						</p>
					</div>
				</div>

				{/* Hypnotherapy Benefits */}
				<div className="mt-16">
					<h3 className="text-3xl font-bold text-center text-[#1D2C60] mb-8 animate__animated animate__fadeIn animate__delay-1s">
						Hypnotherapy can assist with:
					</h3>
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{hypnotherapyBenefits.map((benefit, index) => (
							<li
								key={index}
								className="bg-white p-4 text-center text-base lg:text-lg rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform "
							>
								{benefit}
							</li>
						))}
					</ul>
				</div>

				{/* Stella's Qualifications */}
				<div className="mt-16">
					<h3 className="text-3xl font-bold text-center text-[#1D2C60] mb-8 animate__animated animate__fadeIn animate__delay-2s">
						Stella&apos;s Qualifications:
					</h3>
					<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						{qualifications.map((qualification, index) => (
							<li
								key={index}
								className="bg-white p-4 text-center text-base lg:text-lg rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl "
							>
								{qualification}
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default StellaIntroduction;
