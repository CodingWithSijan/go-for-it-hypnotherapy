import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import BookAppointment from "./pages/BookAppontment";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/book_appointment" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
};

export default App;
