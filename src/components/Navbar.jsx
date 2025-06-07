import { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);
  return (
    <div className="w-full fixed top-0 left-0 backdrop-blur-sm z-50 shadow-lg bg-slate-800 md:bg-opacity-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-20 lg:px-32">
        <div>
          <img
            src={assets.arazLogo}
            className="md:w-32 w-28 cursor-pointer"
            alt="Araz Development logo"
          />
        </div>
        <ul className="hidden sm:flex items-center gap-6 text-base text-white">
          <NavLink to="/" className="flex flex-col items-center gap-1 ">
            <p className="">HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
          </NavLink>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
          </NavLink>

          <NavLink to="/rent" className="flex flex-col items-center gap-1">
            <p>TO RENT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
          </NavLink>

          <NavLink to="/sale" className="flex flex-col items-center gap-1">
            <p>FOR SALE</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
          </NavLink>

          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
          </NavLink>

          {/* <NavLink to="/dashboard" className="flex flex-col items-center gap-1">
            <p>DASHBOARD</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-orange-500 hidden" />
          </NavLink> */}
        </ul>
        <button
          onClick={() => navigate("/signin")}
          className="hidden sm:flex items-center gap-2 bg-orange-500 md:px-8 md:py-2 px-6 py-2 text-white text-base hover:bg-yellow-950 transitions-all duration-500 ease-in-out"
        >
          SIGN IN <IoIosArrowRoundForward />
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="open icon"
        />
      </div>

      {/* ----- mobile menu ------ */}
      <div
        className={`md:hidden ${
          showMobileMenu ? "fixed w-full h-screen" : "h-0 w-0"
        }  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all ease-in-out duration-500`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="close icon"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-8 px-5 text-lg font-medium">
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/"
            className="px-4 py-2 inline-block"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/about"
            className="px-4 py-2 inline-block"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/rent"
            className="px-4 py-2 inline-block"
          >
            TO RENT
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/sale"
            className="px-4 py-2 inline-block"
          >
            FOR SALE
          </NavLink>
          <NavLink
            onClick={() => setShowMobileMenu(false)}
            to="/contact"
            className="px-4 py-2 inline-block"
          >
            CONTACT
          </NavLink>
          <Link to="/signin">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="flex items-center gap-2 mt-2 bg-orange-500 px-6 py-2 text-white text-base hover:bg-yellow-950 transitions-all duration-500 ease-in-out"
            >
              SIGN IN <IoIosArrowRoundForward />
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
