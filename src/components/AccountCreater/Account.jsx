import React from 'react';
import './Account.css';
import { FaUser, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc'; 

const Account = () => {
  return (
    <div className="account-container">
      <div className="account-card">
        {/* Left Side: Welcome Back Message */}
        <div className="account-welcome">
          <h2>Welcome Back!</h2>
          <p>To keep connected with us please log in with your personal info.</p>
          <button>
            Sign In <FaArrowRight className="button-icon" />
          </button>
        </div>

        {/* Right Side: Create Account Form */}
        <div className="account-form">
          <h2>Create Account</h2>

          {/* Google "G" Icon */}
          <div className="google-icon-container">
            <FcGoogle className="google-icon" />
          </div>

          <form>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input type="text" placeholder="Name" />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
