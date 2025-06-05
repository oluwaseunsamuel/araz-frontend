import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const SaleCardSection = () => {
  return (
    <div className="bg-gray-50">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="container mx-auto py-12 lg:px-32 px-6 w-full overflow-hidden"
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          Property{" "}
          <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
            For Sale
          </span>
        </h2>
        <p className="text-center text-gray-500 mb-12 md:px-4 px-6 md:max-w-md max-w-96 mx-auto">
          Our highlight property for sale, with details included ranging from
        </p>
        {/*----  View More Sales Property Section  -----*/}
        <div className="flex flex-row justify-between text-gray-800 mb-5">
          <h2 className="text-xl">Sale's Property Collection</h2>
          <Link
            to="/rent"
            className="text-lg flex flex-row text-orange-500 hover:text-yellow-950 transition-all ease-in-out duration-300"
          >
            View All <IoIosArrowRoundForward className="h-7 w-5 ml-1" />
          </Link>
        </div>
        {/*----  Sales items Collection Section  -----*/}
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {/*----  Sales Section One  -----*/}
          <div className="shadow-lg">
            <Link to="#">
              <img
                src={assets.sale_img_1}
                alt="Sale Property Img"
                className="cursor-pointer hover:scale-105 ease-in-out duration-500"
              />
            </Link>
            <div className="p-3">
              <h2 className="uppercase mb-2 text-gray-900 text-lg">Avante 2</h2>
              <h3 className=" text-gray-500">3 Bedroom Flat | BQ</h3>
              <p className="text-orange-500 text-sm mb-2">Yaba, Lagos</p>
              <p className="text-sm text-gray-800">For Sale</p>
            </div>
          </div>

          {/*----  Sales Section Two  -----*/}
          <div className="shadow-lg">
            <Link to="#">
              <img
                src={assets.sale_img_2}
                alt="Sale Property Img"
                className="cursor-pointer hover:scale-105 ease-in-out duration-500"
              />
            </Link>
            <div className="p-3">
              <h2 className="uppercase mb-2 text-gray-900 text-lg">Avante 2</h2>
              <h3 className=" text-gray-500">4 Bedroom Terrace | BQ</h3>
              <p className="text-orange-500 text-sm mb-2">Yaba, Lagos</p>
              <p className="text-sm text-gray-800">For Sale</p>
            </div>
          </div>

          {/*----  Sales Section Three  -----*/}
          <div className="shadow-lg">
            <Link to="#">
              <img
                src={assets.sale_img_3}
                alt="Sale Property Img"
                className="cursor-pointer hover:scale-105 ease-in-out duration-500"
              />
            </Link>
            <div className="p-3">
              <h2 className="uppercase mb-2 text-gray-900 text-lg">Avante 2</h2>
              <h3 className=" text-gray-500">4 Bedroom Flat | BQ</h3>
              <p className="text-orange-500 text-sm mb-2">Yaba, Lagos</p>
              <p className="text-sm text-gray-800">For Sale</p>
            </div>
          </div>

          {/*----  Sales Section Four  -----*/}
          <div className="shadow-lg">
            <Link to="#">
              <img
                src={assets.sale_img_1}
                alt="Sale Property Img"
                className="cursor-pointer hover:scale-105 ease-in-out duration-500"
              />
            </Link>
            <div className="p-3">
              <h2 className="uppercase mb-2 text-gray-900 text-lg">Avante 2</h2>
              <h3 className=" text-gray-500">3 Bedroom Maisonett | BQ</h3>
              <p className="text-orange-500 text-sm mb-2">Yaba, Lagos</p>
              <p className="text-sm text-gray-800">For Sale</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SaleCardSection;
