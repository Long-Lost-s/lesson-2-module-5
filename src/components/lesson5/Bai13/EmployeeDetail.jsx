import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const EmployeeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const employee = location.state?.employee;

  if (!employee) {
    return <p>No employee selected.</p>;
  }

  return (
    <div>
      <h2>Employee Detail</h2>
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Age:</strong> {employee.age}</p>
      <button onClick={() => navigate("/employees")}>Back to Employee List</button>
    </div>
  );
};

export default EmployeeDetail;
