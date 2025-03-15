import React from "react";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 w-full mt-auto">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold">ResuMate</h2>
          <p className="text-sm mt-1">Your trusted resume builder.</p>
        </div>

        {/* Privacy Policy */}
        <div className="flex justify-center md:justify-start">
          <NavLink to="/privacy-policy" className="text-sm hover:text-blue-400">
            Privacy Policy
          </NavLink>
        </div>

        {/* Terms of Service */}
        <div className="flex justify-center md:justify-start">
          <NavLink to="/terms-of-service" className="text-sm hover:text-blue-400">
            Terms of Service
          </NavLink>
        </div>

        {/* Contact Info */}
        <div className="text-sm">
          <p>Email: support@resumate.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-4">
        © {new Date().getFullYear()} ResuMate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
