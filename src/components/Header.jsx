import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/header_1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-gradient-to-r from-black/75 to-black/80 h-screen flex items-center justify-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mt-14 px-4 text-center container text-white"
        >
          <p className="flex text-lg md:text-2xl mb-8 md:mb-10 font-extralight">
            Welcome, and thank you for visiting.
          </p>
          <h1 className="mb-6 md:mb-8 text-2xl md:text-5xl font-bold">
            Araz Development Company Limited
          </h1>
          <p className="mb-8 md:mb-10 text-base md:text-xl text-gray-200 font-extralight">
            Begin the journey to acquiring homes that fit your dreams by
            clicking the button below
          </p>
          <button
            onClick={() => navigate("/signin")}
            className="flex items-center text-white text-base gap-2 md:px-7 md:py-3 px-6 py-2 bg-orange-500 hover:bg-yellow-950 transitions-all duration-500 ease-in-out"
          >
            GET STARTED <IoIosArrowRoundForward />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
