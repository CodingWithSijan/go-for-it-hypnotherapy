import React, { useState } from 'react';
import axios from 'axios';
import '../styles/profile.css';

const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Stella Dichiera',
    email: 'stella@example.com',
  });

  const handleUpdate = async () => {
    try {
      await axios.put('/api/profile', profile);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
      </div>
      <div className="profile-card">
        <div className="profile-field">
          <label>Name</label>
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({...profile, name: e.target.value})}
          />
        </div>
        <div className="profile-field">
          <label>Email</label>
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({...profile, email: e.target.value})}
          />
        </div>
        <div className="profile-actions">
          <button className="update-btn" onClick={handleUpdate}>
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
