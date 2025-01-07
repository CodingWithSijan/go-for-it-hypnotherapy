import React, { useState, useEffect } from 'react';
import { getDashboardStats } from '../.././services/api.js';
import '../../styles/dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBookings: 0,
    activeBookings: 0,
    completedBookings: 0,
    totalUsers: 0
  });
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data.stats);
        setRecentBookings(data.recentBookings);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

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
            {recentBookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking.userName}</td>
                <td>{booking.service}</td>
                <td>{new Date(booking.dateTime).toLocaleDateString()}</td>
                <td>
                  <span className={`status-label status-${booking.status}`}>
                    {booking.status}
                  </span>
                </td>
                <td>{booking.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
