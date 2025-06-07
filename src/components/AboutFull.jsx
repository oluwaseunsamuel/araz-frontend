import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import Modal from "./Modal";
import { assets } from "../assets/assets";

const AboutFull = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto  py-12 px-4 md:px-20 lg:px-32 w-full overflow-hidden"
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
            Araz Development Company Limited is registered in 2013 under the
            Companies and Allied Matters Act with the primary business object of
            engaging in all aspects of real estate and construction industry.
            The mission of this company is to provide comfortable and affordable
            housing for low, medium and high-income earners.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center text-white text-base gap-2 md:px-8 md:py-3 px-6 py-2 bg-orange-500 "
          >
            LEARN MORE <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
      {/*---- Modal content for the teams  -----*/}
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3 uppercase">
            How it all began:
          </h3>
          <p className=" mb-5 font-normal text-gray-500">
            Razaq Akanbi, founders of Araz Development Company Limited, was
            inspired to start the company by the desire to make a difference
            after witnessing how several industry players have sacrificed
            integrity and the important social functions of helping people meet
            their housing needs for personal success or becoming wealthy
            individuals in real estate business, Coming from a long line of
            entrepreneurs and armed with a determination to prioritise clients’
            interest over quick wealth acquisition that was becoming the
            hallmarks of the industry, Razaq and group of individuals that
            shared the same idea launched this real estate investment and
            management firm some years ago.
          </p>
          <h3 className="text-lg font-medium text-gray-700 mb-3 uppercase">
            Our Present Stage:
          </h3>
          <p className="mb-5 font-normal text-gray-500">
            Within a short time, Araz Development Company Limited quickly became
            recognised as a potential industry leader and threat to the
            dominance of real estate firm putting personal interests against
            clients’ needs. Now celebrating their 8th year of operation, Araz
            Development Company Limited, which has since grown into a
            multi-faceted company with numerous accolades and recognition,
            including being named one of the fastest-growing real estate
            companies in Nigeria is among the top 10 real estate company in
            Lagos State and consistently grows at a 20% pace.
          </p>
          <h3 className="text-lg font-medium text-gray-700 mb-3 uppercase">
            What is Next For Us:
          </h3>
          <p className="mb-5 font-normal text-gray-500">
            With the geometrically increasing demand for real estate services
            and determination to acquire substantial share of the market through
            innovations geared towards clients’ ultimate satisfaction, Araz
            Development Company Limited aim to attain diversification as a core
            strategy for its construction and engineering activities. Beyond
            traditional project-centric models, focus will be on exploring new
            revenue streams such as facilities management, services and
            maintenance, modular and prefabricated construction, and rental
            models all with the mission to better the real estate experience of
            clients.
          </p>
        </div>
      </Modal>
    </motion.div>
  );
};

export default AboutFull;
