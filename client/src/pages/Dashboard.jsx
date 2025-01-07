import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { handleSuccess, handleError } from "../utils/utils";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:3000/bookings/my-bookings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data);
        setAppointments(response.data.activeBookings);
      } catch (error) {
        handleError("Failed to fetch appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [navigate]);

  const handleBookAppointment = () => {
    navigate("/book_appointment");
  };

  const handleCancelAppointment = async (appointmentId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.patch(
        `http://localhost:3000/bookings/cancel/${appointmentId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleSuccess("Appointment cancelled successfully");
      setAppointments((prevAppointments) =>
        prevAppointments.filter(
          (appointment) => appointment._id !== appointmentId
        )
      );
    } catch (err) {
      handleError("Failed to cancel appointment");
    }
  };

  const handleRescheduleAppointment = (appointmentId) => {
    navigate(`/book_appointment?appointmentId=${appointmentId}`);
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-10">
        User Dashboard
      </h1>
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <button
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
            onClick={handleBookAppointment}
          >
            Book Appointment
          </button>
        </div>
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          My Appointments
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="bg-white shadow-md rounded-lg p-6 text-center border-2 border-transparent hover:border-blue-500 transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-lg font-bold text-blue-800">
                  {appointment.service}
                </h3>
                <p className="text-gray-600">
                  {new Date(appointment.dateTime).toLocaleString()}
                </p>
                <div className="flex justify-center space-x-4 mt-4">
                  <button
                    className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
                    onClick={() => handleCancelAppointment(appointment._id)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
                    onClick={() => handleRescheduleAppointment(appointment._id)}
                  >
                    Reschedule
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
