import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const employees = [
  { id: 1, name: "Hoa", age: 20 },
  { id: 2, name: "Khánh", age: 25 },
  { id: 3, name: "Tú", age: 22 },
];

const Employee = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "Unknown User";

  return (
    <div>
      <h2>Employee List</h2>
      <p>Logged in as: <strong>{email}</strong></p>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>
                <button onClick={() => navigate(`/employee/${employee.id}`, { state: { employee } })}>
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default Employee;
