// components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getAllVisitors } from '../api';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const [visitors, setVisitors] = useState([]);

  useEffect(() => {
    fetchVisitors();
  }, []);

  const fetchVisitors = async () => {
    try {
      const response = await getAllVisitors();
      setVisitors(response.data);
    } catch (error) {
      console.error('Error fetching visitors:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Visitor Dashboard</h2>
      <table className="visitor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Host Name</th>
            <th>Host Email</th>
            <th>Check-In</th>
            <th>Check-Out</th>
          </tr>
        </thead>
        <tbody>
          {visitors.map((visitor) => (
            <tr key={visitor._id}>
              <td>{visitor.name}</td>
              <td>{visitor.email}</td>
              <td>{visitor.phone}</td>
              <td>{visitor.hostName}</td>
              <td>{visitor.hostEmail}</td>
              <td>{new Date(visitor.checkIn).toLocaleString()}</td>
              <td>{visitor.checkOut ? new Date(visitor.checkOut).toLocaleString() : 'Not Checked Out'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;