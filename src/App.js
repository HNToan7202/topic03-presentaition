import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import Version from "./components/pages/Version";
import Resigter from "./components/pages/Resigter";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/version" element={<Version />} />
          <Route path="/resigter" element={<Resigter />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
