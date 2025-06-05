import React from "react";
import { motion } from "framer-motion";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./Service.css";
import { assets } from "../assets/assets";

const Service = () => {
  return (
    <div className="bg-gray-50">
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
          Interested in Any of this Services? Let know How we can serve you
        </p>
        <div className="md:w-full mx-auto md:px-0 px-4">
          <Tabs>
            <TabList className="flex flex-wrap justify-start items-center md:gap-8 gap-4 text-gray-500">
              <Tab>General Constructions</Tab>
              <Tab>Real Estate Advisory</Tab>
              <Tab>Property Facility Mgt</Tab>
              <Tab>Property Consultancy</Tab>
              <Tab>Logistic: Procurement</Tab>
              <Tab>Design + Build</Tab>
            </TabList>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white p-10 shadow-lg">
                  <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                    General Construction
                  </h3>
                  <p className="mb-8 font-light">
                    We are into construction base on the fact that our client
                    yarn for the need for it, We do construction for various
                    kind and form ranging from Road, Bridges and Many more
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
                <div className="md:w-1/2 bg-white p-10 shadow-lg">
                  <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                    Real Estate Advisory
                  </h3>
                  <p className="mb-8 font-light">
                    We are better positioned to offer advice on your real estate
                    development and investment portfolio. This includes where to
                    get the better return on investment (ROI) on properties and
                    the best time and places to acquire yours as investment
                    opportunities.
                  </p>
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
                <div className="md:w-1/2 bg-white p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                    Facility Management
                  </h3>
                  <p className="mb-8 font-light">
                    We engage in management and maintenance on properties. As
                    maintenance do not come cheap and majorly expensive, we give
                    our clients the opportunity to have best of quality
                    management and maintenance on their properties.
                  </p>
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
                <div className="md:w-1/2 bg-white p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                    Property Consultant
                  </h3>
                  <p className="mb-8 font-light">
                    We offer consultancy services on property investment for
                    individual or group of investors willing to invest in real
                    estate development in terms of building or purchase of
                    property of different kinds.
                  </p>
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
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                    Logistic: Procurement Mgt
                  </h3>
                  <p className="mb-6 font-light">
                    Starting from the conceptual design and budgeting phase, our
                    purchasing team considers both the technical and commercial
                    aspects of procurement. Our established relationships with
                    leading manufacturing and supply companies, allow us to
                    source quality, competitively priced construction materials.
                  </p>
                </div>
                <div className="md:w-1/2 items-center my-auto object-cover">
                  <img
                    src={assets.service_img_5}
                    alt="Propert Consult"
                    className="w-full h-auto "
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <div className="md:w-1/2 bg-white p-12 shadow-lg">
                  <h3 className="text-3xl font-semibold mb-4 text-yellow-950">
                    Design + Build
                  </h3>
                  <p className="mb-6 font-light">
                    Araz Development can steer projects from Inception to a
                    final product, this approach helps to simultaneously managed
                    design, constructibility, and cost through a in-house
                    management and control of the design team. Construction
                    begins while the building is still being designed ultimately
                    minimising the risk of extension of time for project
                    delivery.
                  </p>
                </div>
                <div className="md:w-1/2 items-center my-auto object-cover">
                  <img
                    src={assets.service_img_5}
                    alt="Propert Consult"
                    className="w-full h-auto "
                  />
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </motion.div>
    </div>
  );
};

export default Service;
