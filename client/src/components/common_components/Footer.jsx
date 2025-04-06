// src/components/Footer.jsx
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa"; // Using React icons for social media

const Footer = () => {
	return (
		<footer className="bg-gradient-to-b from-teal-700 to-cyan-700 text-white py-8 ">
			<div className="container mx-auto px-6 font-bold lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
				{/* Contact Information */}
				<div>
					<h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
					<ul className="space-y-3">
						<li className="flex items-center">
							<span className="mr-2">📍</span> Healing Minds 835 Buckley St
							Moonee Ponds VIC 3039
						</li>
						<li className="flex items-center">
							<span className="mr-2">📧</span> stellahypno@hotmail.com
						</li>
						<li className="flex items-center">
							<span className="mr-2">📞</span> <Link>0415876722</Link>
						</li>
					</ul>
				</div>

				{/* Navigation Links */}
				<div>
					<h3 className="text-2xl font-semibold mb-4 sm:text-center">
						Quick Links
					</h3>
					<ul className="space-y-3 flex flex-col justify-between items-start sm:items-center">
						<li>
							<Link to="/" className="hover:text-indigo-600">
								Home
							</Link>
						</li>
						<li>
							<Link to="/services" className="hover:text-indigo-600">
								Services
							</Link>
						</li>
						<li>
							<Link to="/pricing" className="hover:text-indigo-600">
								Pricing
							</Link>
						</li>
						<li>
							<Link to="/contactus" className="hover:text-indigo-600">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				{/* Social Media Links */}
				<div>
					<h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
					<div className="flex space-x-6">
						<a
							href="https://www.facebook.com/stella.dichiera"
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl hover:text-blue-600"
						>
							<FaFacebook />
						</a>

						<a
							href="https://youtu.be/mMNEDv5ilrE"
							target="_blank"
							rel="noopener noreferrer"
							className="text-2xl hover:text-red-600"
						>
							<FaYoutube />
						</a>
					</div>
				</div>

				{/* Copyright Section */}
				<div className="col-span-full text-center mt-8 sm:mt-0">
					<p className="text-sm text-white-600">
						&copy; 2024 Go For It Hypnotherapy. All rights reserved.
					</p>
					<p className="text-gray-300">Developer: Sijan Pradhan</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
