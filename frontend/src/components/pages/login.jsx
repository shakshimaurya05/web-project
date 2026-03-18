import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from "../../utils";
import { ToastContainer } from 'react-toastify';
import "./login.css";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";

function Login() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({  
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError("Email and password are required");
    }

    try {
    
      if (email === "test@gmail.com" && password === "821040") {

        const dummyUser = {
          name: "Shakshi Kumari Maurya",
          _id: "12345",
          token: "dummy-token-123"
        };

        localStorage.setItem('token', dummyUser.token);
        localStorage.setItem('loggedInUser', dummyUser.name);
        localStorage.setItem('_id', dummyUser._id);

        handleSuccess("Login successful!");

        setTimeout(() => navigate("/home"), 1000);

      } else {
        handleError("Invalid email or password");
      }

    } catch (err) {
      console.log(err);
      handleError("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />

     
      <div className="page-content">
        <div className="login-page">
          <div className="login-card">
            <div className="login-card-header">
              <i className="fas fa-infinity"></i> SkillSwap
            </div>

            <div className="profile-icon">
              <i className="fas fa-user"></i>
            </div>

            <h1>Welcome Back!</h1>
            <h2>Log in to continue your journey</h2>

            <form onSubmit={handleLogin}>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={loginInfo.email}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginInfo.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn1">Login</button>

              <span>
                Don't have an account ?
                <Link to="/signup">Signup</Link>
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

export default Login;