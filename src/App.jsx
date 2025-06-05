import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ScrollFromTop from "./components/ScrollFromTop";
import ScrollToTop from "./components/ScrollToTop";
import AnimateRoute from "./Routes/AnimateRoute";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full overflow-hidden">
          <Router>
            <ScrollFromTop />
            <ScrollToTop />
            <ToastContainer position="top-center" />
            <AnimateRoute />
          </Router>
        </div>
      )}
    </>
  );
};

export default App;
