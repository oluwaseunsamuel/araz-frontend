import React from "react";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Service.css";
import { assets } from "../assets/assets";

const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-12 lg:px-32 w-full overflow-hidden"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Services{" "}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          Our Work
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Looking for Any of this Services? Let know How we can serve you
      </p>
      <div className="md:w-full mx-auto md:px-0 px-4">
        <Tabs>
          <TabList className="flex flex-wrap justify-between items-center md:gap-8 gap-4 text-gray-500">
            <Tab>General Constructions</Tab>
            <Tab>Real Estate Advisory</Tab>
            <Tab>Property Facility Mgt</Tab>
            <Tab>Property Consultancy</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-gray-100 p-10 shadow-lg">
                <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                  General Construction
                </h3>
                <p className="mb-8 font-light">
                  We are into construction base on the fact that our client yarn
                  for the need for it, We do construction for various kind and
                  form ranging from Road, Bridges and Many more
                </p>
                <h4 className="text-xl font-medium mb-4">
                  What you will Benefits:
                </h4>
                <ul className="list-disc list-inside space-y-2 font-light">
                  <li>Cost Effectiveness </li>
                  <li>Good Return on Investment</li>
                  <li>Management of Resouces</li>
                  <li>Effective Time Management</li>
                </ul>
              </div>
              <div className="md:w-1/2 items-center my-auto object-cover">
                <img
                  src={assets.service_img_1}
                  alt="Construction"
                  className="w-full h-auto "
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-gray-100 p-10 shadow-lg">
                <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                  Real Estate Advisory
                </h3>
                <p className="mb-8 font-light">
                  We are in a better position to advise on improving your
                  investment in real estate development and building your
                  portfolio, we will advise you on where to get the better
                  return on investment(ROI) on all your property and give you
                  the best opportunities to acquire yours
                </p>
                <h4 className="text-xl font-medium mb-4">
                  What you will Benefits:
                </h4>
                <ul className="list-disc list-inside space-y-3 font-light">
                  <li>Cost Effectiveness </li>
                  <li>Good Return on Investment</li>
                  <li>Management of Resouces</li>
                  <li>Effective Time Management</li>
                </ul>
              </div>
              <div className="md:w-1/2 items-center my-auto object-cover">
                <img
                  src={assets.service_img_2}
                  alt="Real Estate"
                  className="w-full h-auto "
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-gray-100 p-12 shadow-lg">
                <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                  Facility Management
                </h3>
                <p className="mb-8 font-light">
                  We cover all forms of maintainance on our properties. Due to
                  the fact that maintainance do not come cheap and majorly
                  expensive, we give our client the opportunity to have best of
                  quality maintainance on their propertie
                </p>
                <h4 className="text-xl font-medium mb-4">
                  What you will Benefits:
                </h4>
                <ul className="list-disc list-inside space-y-3 font-light">
                  <li>Cost Effectiveness </li>
                  <li>Good Return on Investment</li>
                  <li>Management of Resouces</li>
                  <li>Effective Time Management</li>
                </ul>
              </div>
              <div className="md:w-1/2 items-center my-auto object-cover">
                <img
                  src={assets.service_img_3}
                  alt="Facility Mgt"
                  className="w-full h-auto "
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col md:flex-row gap-8 mt-8">
              <div className="md:w-1/2 bg-gray-100 p-12 shadow-lg">
                <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                  Property Consultant
                </h3>
                <p className="mb-8 font-light">
                  We do consultation on issues of property for individual or
                  group of investors that are willing to invest in real estate
                  development or building or purchase of property and in also
                  different.
                </p>
                <h4 className="text-xl font-medium mb-4">
                  What you will Benefits
                </h4>
                <ul className="list-disc list-inside space-y-3 font-light">
                  <li>Cost Effectiveness </li>
                  <li>Good Return on Investment</li>
                  <li>Management of Resouces</li>
                  <li>Effective Time Management</li>
                </ul>
              </div>
              <div className="md:w-1/2 items-center my-auto object-cover">
                <img
                  src={assets.service_img_4}
                  alt="Propert Consult"
                  className="w-full h-auto "
                />
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Service;
