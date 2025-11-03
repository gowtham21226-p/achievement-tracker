import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") return;

    console.log("Signup Data :-", { name, email, password });

    // Redirect to HomePage
    navigate("/");
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <img
          src="https://img.icons8.com/ios-filled/100/ffffff/add-user-group-man-man.png"
          alt="Signup Icon"
        />
        <h2>Hello, Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
