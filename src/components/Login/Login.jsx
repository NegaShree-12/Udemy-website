import React from "react";
import "./Login.css";
import google from "../../assets/google.png";
import exam from "../../assets/exam.png";
import { Link } from 'react-router-dom';


const Login = () => {
  return (
      <div className="login-page">
    <div className="login-container">
      {/* Left Side - Illustration & Text */}
      <div className="left-section">
        <h2>  Udemy</h2>
        <p>
          Unleash Your Academic Success with Exam Mastery Hub's Exam Excellence Platform
        </p>
        <img src={exam} alt="Exam Illustration" className="illustration" />
      </div>

      {/* Right Side - Form */}
      <div className="right-section">
        <h2 className="brand">Udemy </h2>
        <form className="login-form">
          <label>Username or Email</label>
          <input type="text" placeholder="Enter your username or email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <a href="#" className="forgot-password">Forgot password?</a>
          <button type="submit" className="login-btn">Sign in</button>

          <div className="divider">or</div>
          <button className="google-login">
            <img src={google} alt="Google" /> Sign in with Google
          </button>

          <p className="signup-text">
            Are you new? <Link to="/signup">Create an Account</Link>  
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
