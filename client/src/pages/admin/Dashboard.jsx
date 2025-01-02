import  { useState, useEffect } from 'react';
import { getDashboardStats } from '../.././services/api.js';
import '../../styles/dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalBookings: 0,
    totalUsers: 0,
  });
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getDashboardStats();
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
        <h1>Welcome Stella 👋</h1>
      </header>

      <div className="stats-cards">
        <div className="stat-card">
          <h3>Total Blogs</h3>
          <p>{stats.totalBlogs}</p>
        </div>
        <div className="stat-card">
          <h3>Total Bookings</h3>
          <p>{stats.totalBookings}</p>
        </div>
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
      </div>

      <section className="recent-section">
        <h2>Recent Bookings</h2>
        <table className="recent-table">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.status}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
