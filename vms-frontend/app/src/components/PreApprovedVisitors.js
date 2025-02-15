// components/PreApprovedVisitors.js
import React, { useEffect, useState } from "react";
import { getAllPreApprovedVisitors } from "../api";
import { useNavigate } from "react-router-dom";
import "./PreApprovedVisitors.css"; // Import the CSS file

const PreApprovedVisitors = () => {
  const [preApprovedVisitors, setPreApprovedVisitors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPreApprovedVisitors();
  }, []);

  const fetchPreApprovedVisitors = async () => {
    try {
      const response = await getAllPreApprovedVisitors();
      setPreApprovedVisitors(response.data);
    } catch (error) {
      console.error("Error fetching pre-approved visitors:", error);
    }
  };

  return (
    <div className="pre-approved-visitors-container">
      <h2>Pre-Approved Visitors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Host Name</th>
            <th>Host Email</th>
            <th>Pre-Approved On</th>
          </tr>
        </thead>
        <tbody>
          {preApprovedVisitors.map((visitor) => (
            <tr key={visitor._id}>
              <td>{visitor.name}</td>
              <td>{visitor.email}</td>
              <td>{visitor.phone}</td>
              <td>{visitor.hostName}</td>
              <td>{visitor.hostEmail}</td>
              <td>{new Date(visitor.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/pre-approve")} className="back-button">
        Back to Pre-Approval
      </button>
    </div>
  );
};

export default PreApprovedVisitors;