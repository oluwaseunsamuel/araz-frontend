import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import { assets } from "../assets/assets";
import { IoPlay } from "react-icons/io5";

const SiteProgress = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-50 pt-12">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center container mx-auto py-4 p-20 px-6 md:px-20 lg:px-32 w-full overflow-hidden"
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Location Site{" "}
          <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
            Progress
          </span>
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-80">
          Crafting spaces, Building Legacies - Explore Our Location Site
          Progress
        </p>
        <div className="flex flex-col md:flex-row items-center mx-auto md:w-full gap-8">
          {/* ---Left Content ----- */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            <div className="bg-white p-6 shadow-lg">
              <h2 className="md:text-4xl font-semibold text-3xl mb-3 ">
                Our Site Location to date:
              </h2>
              <div className="border-orange-500 border-2 w-32 mb-5"></div>
              <p className="md:max-w-[440px] text-gray-500">
                In This section, you will get firsthand update and information
                as often as possible on the progress, look and current
                development of the on-going projects on our sites. This will
                help our client and prospective to be aware of our progress.
              </p>
            </div>
          </div>

          {/* ---Right Content ----- */}
          <div className="md:w-1/2 w-full ">
            <div className="relative">
              <img
                src={assets.site_progress_img}
                alt="Video Thumbnail"
                className="object-cover md:h-[446px] h-auto w-full"
              />
              <button
                onClick={() => setShowModal(true)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500 md:p-3 p-2 rounded-full shadow-lg cursor-pointer items-center hover:bg-yellow-950 transitions-all duration-500 ease-in-out"
              >
                <IoPlay className="md:size-12 size-8 text-white" />
              </button>
            </div>
            {/*---- Modal content for the teams  -----*/}
            <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/mbwuj58UEPg?si=obICb3UXfQtCinGN"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Modal>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SiteProgress;
