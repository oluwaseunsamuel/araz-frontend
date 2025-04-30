import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Modal from "./Modal";
import { assets } from "../assets/assets";

const AboutFull = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
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
              <p className="text-4xl font-medium text-gray-800">15+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">37+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Delieved Projects</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
            minima debitis ipsam. Molestiae eum ab, nostrum facere aliquid
            officiis dolore, magni magnam laboriosam vel, praesentium voluptatem
            delectus veritatis quos ipsam! Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <h3 className="text-lg font-medium text-gray-700 mb-3 uppercase">
            Our Present Stage:
          </h3>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur qui!
          </p>
          <h3 className="text-lg font-medium text-gray-700 mb-3 uppercase">
            Our Next and Future Stage:
          </h3>
          <p className="mb-5 font-normal text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit consectetur odit nostrum itaque harum accusantium
            dicta aliquam hic necessitatibus deleniti neque, officia est enim,
            quis pariatur qui!
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default AboutFull;
