import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-12 lg:px-32 w-full overflow-hidden"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Our Team{" "}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          Meet Them
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-12 md:px-4 px-6 max-w-96 mx-auto">
        Our dedicated team of technocrate are ready to give you the better of
        everything
      </p>
      <div className="flex flex-wrap mx-auto justify-center gap-6">
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Chief Executive Officer
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Razaq Akanbi
            </p>
            <button className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white">
              <Link to="/about"> Read More</Link>
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Executive Director
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Amudalat Akanbi
            </p>
            <button className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white">
              <Link to="/about"> Read More</Link>
            </button>
          </div>
        </div>
        <div className="w-[320px] shadow-xl rounded p-4">
          <div className="w-52 mx-auto">
            <img
              src={assets.team_img_1}
              alt="Team Image"
              className="mb-4 object-fill"
            />
          </div>
          <div className="text-center">
            <h2 className="text-lg mb-1 text-gray-500 font-bold">
              Non Executive Advisor
            </h2>
            <p className="text-lg mb-1 text-orange-500 font-semibold">
              Ademorin Kuye
            </p>
            <button className="py-2 px-6 mb-6 mt-4 bg-orange-500 text-white">
              <Link to="/about"> Read More</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurTeam;
