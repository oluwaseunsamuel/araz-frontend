import { motion } from "framer-motion";
import About from "../components/AboutSection";
import Contact from "../components/ContactSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import OurTeam from "../components/OurTeam";
import Projects from "../components/ProjectSection";
import RentSection from "../components/RentCardSection";
import SaleSection from "../components/SaleCardSection";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <motion.div>
      <Header />
      <Navbar />
      <About />
      <Service />
      <Projects />
      <SaleSection />
      <RentSection />
      <OurTeam />
      <Testimonial />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default Home;
