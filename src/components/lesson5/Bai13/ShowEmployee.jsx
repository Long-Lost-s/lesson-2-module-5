import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Employee from "./Employee";
import EmployeeDetail from "./EmployeeDetail";


const ShowEmployee = () => {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employees" element={<Employee />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
      </Routes>
  );
};

export default ShowEmployee;
