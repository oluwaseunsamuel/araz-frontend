import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import About from "./pages/About";
import Rent from "./pages/Rent";
import Sale from "./pages/Sale";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import ScrollFromTop from "./components/ScrollFromTop";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import ForgetPassword from "./pages/ForgetPassword";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Router>
        <ScrollFromTop />
        <ScrollToTop />
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
