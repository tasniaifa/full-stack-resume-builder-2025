// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import App from "./App";
import "./index.css";
import "./Pages/index.css"
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFS05amc8F0NQtwXFfG1iobBPhyl-VZ20",
  authDomain: "authentication-817af.firebaseapp.com",
  projectId: "authentication-817af",
  storageBucket: "authentication-817af.firebasestorage.app",
  messagingSenderId: "61952796454",
  appId: "1:61952796454:web:16585e14c78970d50ac3e7",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
