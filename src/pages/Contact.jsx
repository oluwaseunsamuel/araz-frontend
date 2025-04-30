import React from "react";
import Navbar from "../components/Navbar";
import OthersHeader from "../components/OthersHeader";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <OthersHeader contentHeader="CONTACT US" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
