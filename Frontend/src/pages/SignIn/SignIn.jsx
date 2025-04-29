"use client"; 
import { useState } from "react";
import "../../App.css";
import "./SignIn.css";
import Onlylogo from "../../components/Onlylogo/Onlylogo";

const SignIn = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (isRegister && !formData.name)) {
      alert("Please fill in all fields");
      return;
    }
    console.log(isRegister ? "Registering..." : "Signing in...", formData);
  };

  return (
    <>
      <Onlylogo />
      <div className="signin-container">
        <h2>{isRegister ? "Register" : "Sign In"}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="signin-input"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="signin-input"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="signin-input"
          />
          <button type="submit" className="signin-btn">
            {isRegister ? "Register" : "Sign In"}
          </button>
        </form>
        <p className="toggle-text">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsRegister(!isRegister)} className="toggle-link">
            {isRegister ? "Sign In" : "Register"}
          </span>
        </p>
      </div>
    </>
  );
};

export default SignIn;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../../App.css";
// import "./SignIn.css"
// import LogoHeader from "../../components/LogoHeader/LogoHeader";


// const SignIn = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);
//     navigate("/dashboard"); // Redirect to dashboard after sign-in
//   };

//   return (
//     <><LogoHeader />
//     <div className="signin-container">
//       <h2>Sign In</h2>
//       <form onSubmit={handleSubmit}>
//         <input className="signin-input"
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required />
//         <input className="signin-input"
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required />
//         <button className="signin-btn" type="submit">Sign In</button>
//       </form>
//     </div></>
//   );
// };

// export default SignIn;
