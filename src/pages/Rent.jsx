import React from "react";
import Navbar from "../components/Navbar";
import OthersHeader from "../components/OthersHeader";
import Contact from "../components/ContactSection";
import Footer from "../components/Footer";

const Rent = () => {
  return (
    <div>
      <Navbar />
      <OthersHeader contentHeader="RENT AN APARTMENT" />
      <div className=""></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Rent;
