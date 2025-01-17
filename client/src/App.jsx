import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import BookAppointment from "./pages/BookAppointment";
import { ToastContainer } from "react-toastify"
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLogin from "./pages/admin/AdminLogin";
import ProtectedRoutes from "./utils/ProtectedRoutes";


const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
        {/* Protected User Routes */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/book_appointment" element={<BookAppointment />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

       {/* Admin Routes With Dashboard */}
       <Route path="/admin/*" element={
          <Routes>
            <Route path="adminlogin" element={<AdminLogin/>}/>
            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoutes />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              {/* <Route path="bookings" element={<Booking />} />
              <Route path="profile" element={<Profile />} /> */}
            </Route>
          </Routes>
        } />
      </Routes>
    </Router>
  );
};

export default App;