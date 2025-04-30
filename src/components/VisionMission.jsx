import React from "react";
import { assets } from "../assets/assets";

const VisionMission = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden">
      <h2 className="text-2xl sm:text-4xl font-bold mb-2">
        Passion{" "}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          Our Goals
        </span>
      </h2>
      <p className="text-gray-500 md:max-w-[340px] max-w-80 text-center mb-8">
        Dedicated to Your Vision and Mission by putting passionate individual
        together
      </p>
      <div className="flex flex-col md:flex-row gap-8 mt-6">
        <div className="md:w-1/2 bg-gray-100 p-12 shadow-lg">
          <h3 className="text-3xl font-semibold mb-2 text-yellow-950">
            Our Vision:
          </h3>
          <p className="mb-8 font-light">
            Our aim is to be “a preferred real estate development brand” in
            Africa and Beyond.
          </p>
          <h3 className="text-3xl font-semibold mb-2 text-yellow-950">
            Our Mission:
          </h3>
          <p className="mb-8 font-light">
            A team of professionals committed to advancing lives through design,
            lifestyle and thriving communities.
          </p>
          <h3 className="text-2xl font-semibold mb-2 text-yellow-950">
            Our Core Value
          </h3>
          <p className="text-base">B - Believe</p>
          <p className="text-base">E - Excellence</p>
          <p className="text-base">S - Service</p>
          <p className="text-base">T - Trust</p>
        </div>
        <div className="md:w-1/2 items-center my-auto object-cover">
          <img
            src={assets.our_vision_img}
            alt="Vision and Misson Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
