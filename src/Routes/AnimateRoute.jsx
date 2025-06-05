import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Rent from "../pages/Rent";
import Sale from "../pages/Sale";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Signin from "../pages/Signin";
import ForgetPassword from "../pages/ForgetPassword";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimateRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoute;
