import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "Unknown User";

  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <p>Logged in as: <strong>{email}</strong></p>
      <button onClick={() => navigate("/")}>Logout</button>
    </div>
  );
};

export default Home;
