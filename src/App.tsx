// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ResumeTemplate from "./Pages/ResumeTemplate";
import CreateResume from "./Pages/CreateResume";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer"; 

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> {/* Full-page layout */}
        <Navbar />
        <main className="flex-grow"> {/* Pushes the footer down */}
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ResumeTemplate" element={<ResumeTemplate />} />
            <Route path="/CreateResume" element={<CreateResume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </main>
        <Footer /> {/* ✅ Footer will always be at the bottom */}
      </div>
    </Router>
  );
};

export default App;
