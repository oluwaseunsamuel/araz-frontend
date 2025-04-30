import React from "react";
import Navbar from "../components/Navbar";
import OthersHeader from "../components/OthersHeader";
import Footer from "../components/Footer";
import Contact from "../components/ContactSection";
import VisionMission from "../components/VisionMission";
import Service from "../components/Service";
import OurTeamFull from "../components/OurTeamFull";
import AboutFull from "../components/AboutFull";

const About = () => {
  return (
    <div className="">
      <Navbar />
      <OthersHeader contentHeader="ABOUT US" />
      <AboutFull />
      <VisionMission />
      <Service />
      <OurTeamFull />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
