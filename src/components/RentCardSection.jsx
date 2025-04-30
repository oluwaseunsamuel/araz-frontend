import React from "react";
import { assets } from "../assets/assets";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const RentCardSection = () => {
  return (
    <div className="container mx-auto py-12 lg:px-32 px-6 w-full overflow-hidden">
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Property {""}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          For Rent
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-10 md:px-4 px-6 md:max-w-md max-w-96 mx-auto">
        Our highlight property for rent, with details included ranging from
      </p>
      {/*---- View More Rent Property Section  -----*/}
      <div className="flex flex-row justify-between text-gray-800 mb-5">
        <h2 className="text-xl">Rent's Property Collection</h2>
        <Link to="/rent" className="text-lg flex flex-row text-orange-500">
          View All <IoIosArrowRoundForward className="h-7 w-5 ml-1" />
        </Link>
      </div>
      {/*---- Rent items Collection Section  -----*/}
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div className="shadow-lg">
          <Link to="#">
            <img src={assets.rent_img_1} alt="" className="" />
          </Link>
          <div className="p-3">
            <h3 className="mb-1 text-gray-800">Room & Parlour Self Contain</h3>
            <p className="text-orange-500 text-sm">Ilupeju, Lagos</p>
            <p className="text-sm text-gray-800 mb-2">For Rent</p>
            <button className="text-sm py-2 px-4 bg-orange-500 text-white">
              Get More
            </button>
          </div>
        </div>
        <div className="shadow-lg">
          <Link to="#">
            <img src={assets.rent_img_1} alt="" className="" />
          </Link>
          <div className="p-3">
            <h3 className="mb-1 text-gray-800">Room & Parlour Self Contain</h3>
            <p className="text-orange-500 text-sm">Ilupeju, Lagos</p>
            <p className="text-sm text-gray-800 mb-2">For Rent</p>
            <button className="text-sm py-2 px-4 bg-orange-500 text-white">
              Get More
            </button>
          </div>
        </div>
        <div className="shadow-lg">
          <Link to="#">
            <img src={assets.rent_img_1} alt="" className="" />
          </Link>
          <div className="p-3">
            <h3 className="mb-1 text-gray-800">Room & Parlour Self Contain</h3>
            <p className="text-orange-500 text-sm">Ilupeju, Lagos</p>
            <p className="text-sm text-gray-800 mb-2">For Rent</p>
            <button className="text-sm py-2 px-4 bg-orange-500 text-white">
              Get More
            </button>
          </div>
        </div>
        <div className="shadow-lg">
          <Link to="#">
            <img src={assets.rent_img_1} alt="" className="" />
          </Link>
          <div className="p-3">
            <h3 className="mb-1 text-gray-800">Room & Parlour Self Contain</h3>
            <p className="text-orange-500 text-sm">Ilupeju, Lagos</p>
            <p className="text-sm text-gray-800 mb-2">For Rent</p>
            <button className="text-sm py-2 px-4 bg-orange-500 text-white">
              Get More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentCardSection;
