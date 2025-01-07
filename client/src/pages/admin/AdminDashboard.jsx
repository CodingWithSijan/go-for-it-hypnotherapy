import React, { useState, useEffect } from 'react';
import '../../styles/dashboard.css';
import axios from "axios";
import { handleSuccess, handleError} from "../../utils/utils"

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    activeBookings: 0,
    completedBookings: 0,
    totalUsers: 0
  });
  const [allBookings, setAllBookings] = useState([]);
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(()=> {
    handleFetchAllBookings();
    handleFetchAllUsers();
    getRecentBookings();
  }, [stats.totalBookings, stats.activeBookings, stats.completedBookings, stats.totalUsers])
  // Get all bookings and sort it by recent dateTime
  const recentBookingSort = (arrayOfBookings) => {
    
  }
  // --------------------------------------------------------------------------------------------------------
  // get all bookings controllers
  const handleFetchAllBookings = async () => {
    try{
      const response = await axios.get("http://localhost:3000/bookings/getAllBookings");
      let arrayOfBookings = response.data.bookings;
      setAllBookings(arrayOfBookings);
      
      // Get All bookings
      let totalNumberOfBookings = arrayOfBookings.length;
      setStats((prevState) => ({...prevState, totalBookings: totalNumberOfBookings}));
      // get All active Bookings
      let activeBookings = arrayOfBookings.filter((item, index) => item.status === "active");
      console.log("Active Bookings:", activeBookings);
      setStats((prevState) => ({...prevState, activeBookings:activeBookings.length}));
      // get All completed Bookings
      let completedBookings = arrayOfBookings.filter((item, index) => item.status === "completed");
      console.log("Completed bookings :", completedBookings)
      setStats((prevState) => ({...prevState, completedBookings:completedBookings.length}));
      
      

    }catch(error){}
  }

  // -------------------------------------------------------------------------------------------------
  const getRecentBookings = () => {
    console.log("All Bookings: ", allBookings);
    // console.log("DateTime:",allBookings.sort((a, b) => new()));

    const sortedBookings = allBookings.sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime));
    console.log(`"Sorted bookings:", ${sortedBookings}`);
    setRecentBookings(sortedBookings);
  }
  // --------------------------------------------------------------------------------------------------
  // get all users controller
  const handleFetchAllUsers = async () => {
    const response = await axios.get("http://localhost:3000/users/fetchallusers");
      let arrayOfUsers = response.data.user;
      console.log(response.data);
      // Get All users
      let totalNumberOfUsers = arrayOfUsers.length;
      setStats((prevState) => ({...prevState, totalUsers: totalNumberOfUsers}));
  }
  return (
    <div className="dashboard-container">
      <header>
        <h1>Admin Dashboard</h1>
      </header>
      
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Total Bookings</h3>
          <p>{stats.totalBookings}</p>
        </div>
        <div className="stat-card">
          <h3>Active Bookings</h3>
          <p>{stats.activeBookings}</p>
        </div>
        <div className="stat-card">
          <h3>Completed Bookings</h3>
          <p>{stats.completedBookings}</p>
        </div>
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
      </div>

      <section className="bookings-section">
        <h2>Recent Bookings</h2>
        <table className="bookings-table">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Service</th>
              <th>Date</th>
              <th>Status</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((item, index) => (
              <tr key={item.index}>
                <td>{item.userName}</td>
                <td>{item.service}</td>
                <td>{new Date(item.dateTime).toLocaleDateString()}</td>
                <td>
                  <span className={`status-label status-${item.status}`}>
                    {item.status}
                  </span>
                </td>
                <td>{item.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
