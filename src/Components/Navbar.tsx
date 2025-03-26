import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import CSS file
import Logo from "../assets/Logo1.png"; // ✅ Import Logo

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
      
      {/* ✅ Logo + Brand Name with Gradient Shading */}
      <NavLink to="/" className="flex items-center space-x-3">
        <img src={Logo} alt="ResuMate Logo" className="h-9 w-10" />  
        <span className="brand-name">ResuMate</span> {/* ✅ Gradient Text */}
      </NavLink>

      {/* ✅ Navigation Links */}
      <nav className="flex space-x-6">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-blue-400" : "hover:text-gray-300")}>
          Home
        </NavLink>
        <NavLink to="/ResumeTemplate" className={({ isActive }) => (isActive ? "text-blue-400" : "hover:text-gray-300")}>
        Resume Template
        </NavLink>
        <NavLink to="/MultiStepsForm" className={({ isActive }) => (isActive ? "text-blue-400" : "hover:text-gray-300")}>
        Create Resume
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-blue-400" : "hover:text-gray-300")}>
          Contact
        </NavLink>
      </nav>

      {/* ✅ Login and Signup Buttons */}
      <div className="auth-buttons flex space-x-4">
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
        <NavLink to="/signup" className="signup-btn">
          Sign Up
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;




