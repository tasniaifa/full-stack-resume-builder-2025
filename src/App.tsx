// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer"; 
import AuthRoute from "./AuthRoute";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Full-page layout */}
        <Navbar />
        <main className="flex-grow"> {/* Pushes the footer down */}
          <Routes>
            <Route path="/" element={<AuthRoute><Home /></AuthRoute>} />
            <Route path="/about" element={<AuthRoute><About /></AuthRoute>} />
            <Route path="/services" element={<AuthRoute><Services /></AuthRoute>} />
            <Route path="/portfolio" element={<AuthRoute><Portfolio /></AuthRoute>} />
            <Route path="/contact" element={<AuthRoute><Contact /></AuthRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer /> {/* ✅ Footer will always be at the bottom */}
      </div>
    </Router>
  );
};

export default App;
