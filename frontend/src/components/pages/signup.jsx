import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from "../../utils";
import { ToastContainer } from 'react-toastify';
import "./signup.css";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

function Signup() {
  const navigate = useNavigate();

  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copySignupInfo = { ...signupInfo };
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("Name, email and password are required");
    }

    try {
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = existingUsers.find(user => user.email === email);

      if (userExists) {
        return handleError("User already exists!");
      }

      const newUser = {
        name,
        email,
        password,
        _id: Date.now().toString()
      };

      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      localStorage.setItem("token", "dummy-token");
      localStorage.setItem("loggedInUser", name);
      localStorage.setItem("_id", newUser._id);

      handleSuccess("Signup successful!");

      setTimeout(() => navigate("/home"), 1000);

    } catch (err) {
      console.log(err);
      handleError("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />

    
      <div className="page-content">
        <div className="signup-page">
          <div className="signup-card">
            <div className="signup-card-header">
              <i className="fas fa-infinity"></i> SkillSwap
            </div>

            <h1>Join SkillSwap Today</h1>
            <h2>Create your account and start learning!</h2>

            <form onSubmit={handleSignup}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={signupInfo.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={signupInfo.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={signupInfo.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn1">Sign Up</button>

              <span>
                Already have an account ?
                <Link to="/login">Login</Link>
              </span>
            </form>

            <ToastContainer />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;