import React, { useState, useEffect } from 'react';
import { getBookings } from '../../.services/api.js';
import '../../styles/booking.css';

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };
    fetchBookings();
  }, []);

  const filteredBookings = bookings.filter(booking => 
    filter === 'all' ? true : booking.status === filter
  );

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Bookings Management</h1>
        <div className="filter-buttons">
          <button onClick={() => setFilter('all')}>All</button>
          <button onClick={() => setFilter('active')}>Active</button>
          <button onClick={() => setFilter('completed')}>Completed</button>
          <button onClick={() => setFilter('cancelled')}>Cancelled</button>
        </div>
      </div>
      <table className="booking-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Date & Time</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.userName}</td>
              <td>{booking.userEmail}</td>
              <td>{booking.service}</td>
              <td>{new Date(booking.dateTime).toLocaleString()}</td>
              <td>{booking.phoneNumber}</td>
              <td>
                <span className={`status-label status-${booking.status}`}>
                  {booking.status}
                </span>
              </td>
              <td>
                <button className="edit-btn">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Booking;
