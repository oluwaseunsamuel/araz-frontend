import React from "react";
import Navbar from "../components/Navbar";
import OthersHeader from "../components/OthersHeader";
import Footer from "../components/Footer";
import Contact from "../components/ContactSection";

const Sale = () => {
  return (
    <div>
      <Navbar />
      <OthersHeader contentHeader="BUY A PROPERTY" />
      <div className=""></div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Sale;
