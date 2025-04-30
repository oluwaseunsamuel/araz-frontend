import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-4 md:px-20 lg:px-32 py-12 w-full overflow-hidden"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h2>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedicated to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.about_img}
          alt="Brand Image"
          className="w-full sm:w-1/2 max-w-lg"
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-700">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">18+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">23+</p>
              <p>Delieved Projects</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">13+</p>
              <p>On Going Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Our Company is Register under the Nigeria Company Statory Law in
            2013. It was register to provide business in a aspect of real estate
            and construction industry. The aims of the organisation is to
            provide affordable housing for low and high income earner.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="flex items-center text-white text-base gap-2 md:px-8 md:py-3 px-6 py-2 bg-orange-500 "
          >
            LEARN MORE <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
