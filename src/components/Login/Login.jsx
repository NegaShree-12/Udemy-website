import React from "react";
import "./Login.css";
import google from "../../assets/google.png";
import exam from "../../assets/exam.png";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Side - Illustration & Text */}
        <div className="left-section">
          <h2> Udemy</h2>
          <p>
            Unleash Your Academic Success with Exam Mastery Hub's Exam
            Excellence Platform
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

            <a href="#" className="forgot-password">
              Forgot password?
            </a>
            <button type="submit" className="login-btn">
              Sign in
            </button>

            <div className="divider">or</div>
            <button className="google-login">
              <img src={google} alt="Google" /> Sign in with Google
            </button>

            <p className="signup-text">
              Are you new? <a href="#">Create an Account</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


// import React from "react";
// import "./Login.css";
// import google from "../../assets/google.png";
// import exam from "../../assets/exam.png";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";


// const Login = () => {

//   const navigate=useNavigate();
//   const[username,setUsername]=useState("");
//   const[password,setPassword]=useState("");
//   try {
//     const response = await fetch('http://localhost:7000/users', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       // If login is successful, navigate to home page
//       navigate('/home');
//     } else {
//       // Handle login error (invalid credentials)
//       alert(data.message);
//     }
//   } catch (err) {
//     console.error(err);
//   }
// };
// localStorage.setItem("login","true")
// localStorage.setItem("username",username)
// localStorage.getItem("username")
// localStorage.setItem("password",password)
//   return (
//       <div className="login-page">
//     <div className="login-container">
//       {/* Left Side - Illustration & Text */}
//       <div className="left-section">
//         <h2>  Udemy</h2>
//         <p>
//           Unleash Your Academic Success with Exam Mastery Hub's Exam Excellence Platform
//         </p>
//         <img src={exam} alt="Exam Illustration" className="illustration" />
//       </div>

//       {/* Right Side - Form */}
//       <div className="right-section">
//         <h2 className="brand">Udemy </h2>
//         <form className="login-form">
//           <label>Username or Email</label>
//           <input type="text" placeholder="Enter your username or email" onChange={(e)=>setUsername(e.target.value)} />

//           <label>Password</label>
//           <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} />

//           <a href="#" className="forgot-password">Forgot password?</a>
//           <button type="submit" className="login-btn">Sign in</button>

//           <div className="divider">or</div>
//           <button className="google-login">
//             <img src={google} alt="Google" /> Sign in with Google
//           </button>

//           <p className="signup-text">
//             Are you new? <a href="#">Create an Account</a>
//           </p>
//         </form>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Login;
