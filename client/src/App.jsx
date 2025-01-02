import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import BookAppointment from "./pages/BookAppontment";
import Dashboard from "./pages/admin/Dashboard";
// import Booking from "./pages/admin/Booking";
// import Profile from "./pages/admin/Profile";

const AdminLayout = ({ children }) => (
  <div className="admin-layout">
    <Sidebar />
    <div className="admin-content">
      {children}
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        
        {/* Admin routes with sidebar */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="dashboard" element={<Dashboard />} />
              {/* <Route path="bookings" element={<Booking />} />
              <Route path="profile" element={<Profile />} /> */}
            </Routes>
          </AdminLayout>
        } />
      </Routes>
    </Router>
  );
};

export default App;