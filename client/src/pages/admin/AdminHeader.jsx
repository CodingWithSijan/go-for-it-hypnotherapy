import { NavLink, useNavigate } from "react-router-dom";

const AdminHeader = () => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("adminToken");
		navigate("/admin/login");
	};

	return (
		<header className="bg-blue-800 text-white p-4 flex justify-between items-center">
			<div className="flex items-center">
				<h1 className="text-2xl font-bold">Admin Dashboard</h1>
			</div>
			<div>
				<NavLink to="/admin/services">MANAGE SERVICES</NavLink>
			</div>
			<div className="flex items-center">
				<p className="mr-4">
					Logged in as: {localStorage.getItem("adminName")}
				</p>
				<button
					onClick={handleLogout}
					className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
				>
					Logout
				</button>
			</div>
		</header>
	);
};

export default AdminHeader;
