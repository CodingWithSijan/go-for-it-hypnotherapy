import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-modal";
import Footer from "../../components/common_components/Footer";
import AdminHeader from "./AdminHeader";

Modal.setAppElement("#root");

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [completedEnquiries, setCompletedEnquiries] = useState([]);
  const [activeTab, setActiveTab] = useState("pending");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [emailMessage, setEmailMessage] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      window.location.href = "/admin/login";
      return;
    }
    const fetchAdminDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_BACKEND_URL}/api/admin/verify-token`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAdminEmail(response.data.email);
        setAdminEmail(localStorage.getItem("adminName"));
      } catch (error) {
        console.error("Failed to fetch admin details:", error);
        window.location.href = "/admin/login";
      }
    };
    fetchAdminDetails();

    const fetchEnquiries = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_BACKEND_URL}/api/enquiries`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const pending = response.data.filter((enquiry) => !enquiry.completed);
        const completed = response.data.filter((enquiry) => enquiry.completed);
        setEnquiries(pending);
        setCompletedEnquiries(completed);
      } catch {
        toast.error("Failed to fetch enquiries");
      }
    };

    fetchEnquiries();
  }, []);

  const markAsCompleted = async (id) => {
    const token = localStorage.getItem("adminToken");
    console.log("Token is:", token);
    try {
      await axios.patch(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/api/admin/enquiries/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Enquiry marked as completed");
      setEnquiries((prev) => prev.filter((enquiry) => enquiry._id !== id));
      const completedEnquiry = enquiries.find((enquiry) => enquiry._id === id);
      setCompletedEnquiries((prev) => [
        ...prev,
        { ...completedEnquiry, completed: true },
      ]);
    } catch {
      toast.error("Failed to mark enquiry as completed");
    }
  };

  const openModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEnquiry(null);
    setEmailMessage("");
  };

  const sendEmail = async () => {
    if (!emailMessage.trim()) {
      toast.error("Email message cannot be empty");
      return;
    }
    setIsSubmitting(true);
    try {
      await axios.post(
        `${import.meta.env.VITE_REACT_BACKEND_URL}/api/send-email`,
        {
          email: selectedEnquiry.email,
          message: emailMessage,
        }
      );
      toast.success("Email sent successfully");
      closeModal();
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
    } catch {
      toast.error("Failed to send email");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <AdminHeader adminEmail={adminEmail} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Admin Dashboard
        </h2>
        <div className="flex justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "pending"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("pending")}
          >
            Pending Enquiries
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "completed"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveTab("completed")}
          >
            Completed Enquiries
          </button>
        </div>
        {activeTab === "pending" ? (
          <div>
            {enquiries.length === 0 ? (
              <p className="text-center text-gray-600">No enquiries found.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Message
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enquiry) => (
                      <tr key={enquiry._id}>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.name}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.email}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.phone}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.service}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.message}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {new Date(enquiry.createdAt).toLocaleString()}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          <button
                            className="bg-green-600 text-white py-1 px-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300 mr-2"
                            onClick={() => markAsCompleted(enquiry._id)}
                          >
                            Mark as Completed
                          </button>
                          <button
                            className="bg-blue-600 text-white py-1 px-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                            onClick={() => openModal(enquiry)}
                          >
                            Send Email
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          <div>
            {completedEnquiries.length === 0 ? (
              <p className="text-center text-gray-600">
                No completed enquiries found.
              </p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Message
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Date & Time
                      </th>
                      <th className="py-2 px-4 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {completedEnquiries.map((enquiry) => (
                      <tr key={enquiry._id}>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.name}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.email}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.phone}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.service}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {enquiry.message}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          {new Date(enquiry.createdAt).toLocaleString()}
                        </td>
                        <td className="py-2 px-4 border-b border-gray-200">
                          <button
                            className="bg-blue-600 text-white py-1 px-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                            onClick={() => openModal(enquiry)}
                          >
                            Send Email
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Send Email Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Send Email to Client</h2>
        <p className="mb-4">
          <strong>To:</strong> {selectedEnquiry?.email}
        </p>
        <textarea
          className="w-full p-2 border rounded-lg mb-4"
          rows="5"
          value={emailMessage}
          onChange={(e) => setEmailMessage(e.target.value)}
          placeholder="Write your message here..."
        ></textarea>
        <div className="flex justify-end">
          <button
            className="bg-gray-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            onClick={sendEmail}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Email"}
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
