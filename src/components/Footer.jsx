import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-10 px-4 lg:px-32 md:px-20 bg-gray-900 w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <img src={assets.arazFootLogo} className="w-32" alt="" />
          <p className="text-gray-300 mt-4 max-w-64 text-justify">
            We are Araz Development, serving in the area of Construction, Real
            Estate and facilities Mgt. We have been able to build a team of
            professional over the years of experience working in this
            industrial.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-200">
            <Link to="/" className="hover:text-orange-500">
              HOME
            </Link>
            <Link to="/about" className="hover:text-orange-500">
              ABOUT
            </Link>
            <Link to="/rent" className="hover:text-orange-500">
              TO RENT
            </Link>
            <Link to="/sale" className="hover:text-orange-500">
              FOR SALE
            </Link>
            <Link to="#" className="hover:text-orange-500">
              PRIVACY POLICIES
            </Link>
          </ul>
        </div>

        {/*---- Subscribe Footer Section  -----*/}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="max-w-80 text-gray-200 mb-4">
            The lastest news, articles, and resources, sent to your inbox weekly
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="p-2 bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
            />
            <button className="py-2 px-4 bg-orange-500 text-white hover:bg-yellow-950 transitions-all duration-500 ease-in-out">
              Subscribe
            </button>
          </div>

          {/*---- Social Media Section  -----*/}
          <div className="flex gap-8 mt-6">
            <a
              href="#"
              className="border border-gray-200 p-3 mx-1 hover:border-orange-500 transitions-all duration-500 ease-in-out"
            >
              <FaFacebookF className="text-base text-gray-200 hover:text-orange-500 transitions-all duration-500 ease-in-out" />
            </a>
            <a
              href="#"
              className="border border-gray-200 p-3 mx-1 hover:border-orange-500 transitions-all duration-500 ease-in-out"
            >
              <FaXTwitter className="text-base text-gray-200 hover:text-orange-500 transitions-all duration-500 ease-in-out" />
            </a>
            <a
              href="#"
              className="border border-gray-200 p-3 mx-1 hover:border-orange-500 transitions-all duration-500 ease-in-out"
            >
              <FaYoutube className="text-base text-gray-200 hover:text-orange-500 transitions-all duration-500 ease-in-out" />
            </a>
            <a
              href="#"
              className="border border-gray-200 p-3 mx-1 hover:border-orange-500 transitions-all duration-500 ease-in-out"
            >
              <FaInstagram className="text-base text-gray-200 hover:text-orange-500 transitions-all duration-500 ease-in-out" />
            </a>
          </div>
        </div>

        {/*---- Contact Footer Section  -----*/}
        <div className="w-full md:w-1/4">
          <h3 className="text-white text-lg font-bold mb-4 md:mt-0 mt-6">
            Contact Us on:
          </h3>
          <p className="text-gray-400 mb-6">By Appointment only</p>
          <div className="text-gray-300 mb-4">
            <p>14, Adeyinka Street, Sura-Mogaji</p>
            <p>Off Coker Road, Lagos</p>
          </div>
          <div className="text-gray-200">
            <p className="">
              T:{" "}
              <span className="pl-1 cursor-pointer hover:text-orange-500">
                +234 (0) 8086066800
              </span>
            </p>
            <p>
              E:{" "}
              <span className="pl-1 cursor-pointer hover:text-orange-500">
                info@arazdevelopment.com.ng
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2025 @ Araz Development. All Right Reserve.
      </div>
    </div>
  );
};

export default Footer;
