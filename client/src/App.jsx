import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Enquiry from "./pages/Enquiry";
import ContactUs from "./pages/ContactUs";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import ServicesManage from "./pages/admin/ServicesManage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddNewServices from "./pages/admin/AddNewServices";
import EditServices from "./pages/admin/EditServices";
import PricingManage from "./pages/admin/PricingManage";
import AddNewPricing from "./pages/admin/AddNewPricing";
import EditPricing from "./pages/admin/EditPricing";

const App = () => {
	return (
		<Router>
			<ToastContainer />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/services" element={<Services />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/enquiry" element={<Enquiry />} />
				<Route path="/contactus" element={<ContactUs />} />
				<Route path="/admin/login" element={<AdminLogin />} />
				<Route path="/admin/dashboard" element={<AdminDashboard />} />
				<Route path="/admin/services" element={<ServicesManage />} />
				<Route path="/admin/pricing" element={<PricingManage />} />
				<Route path="/admin/add-new-service" element={<AddNewServices />} />
				<Route path="/admin/add-new-pricing" element={<AddNewPricing />} />
				<Route path="/admin/edit-service/:id" element={<EditServices />} />
				<Route path="/admin/edit-pricing/:id" element={<EditPricing />} />
			</Routes>
		</Router>
	);
};

export default App;
