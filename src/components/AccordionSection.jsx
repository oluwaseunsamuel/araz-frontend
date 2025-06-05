import React from "react";
import { motion } from "framer-motion";
import Accordion from "./Accordion";

const AccordionSection = () => {
  return (
    <div className="bg-gray-50 py-12">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center container mx-auto px-6 md:px-20 mt-12 lg:px-32 w-full overflow-hidden"
      >
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          FAQ
          <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
            What They Asks
          </span>
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-80">
          This are frequently ask questions individuals or organisations asked
          us.
        </p>
        <div className="flex flex-col md:flex-row items-center mx-auto md:w-full gap-8">
          {/*--- Introduction Section ---*/}
          <div className="md:w-1/3 w-full md:mb-0 mb-8">
            <div className="bg-white p-6 shadow-lg">
              <h2 className="md:text-[20px] font-semibold text-3xl mb-3 ">
                Frequently Asked Questions:
              </h2>
              <div className="border-orange-500 border w-28 mb-5"></div>
              <p className="md:max-w-[440px] text-gray-500">
                This are some of the questions client or people looking for
                ourservices and some people who want to know more about us ask.
                if you have a question different to this please feel free to
                contact us.
              </p>
            </div>
          </div>

          {/*---- Accordion Section ---*/}
          <div className="md:w-2/3 w-full">
            <div className="md:p-0 p-4">
              <div className="bg-white p-4 shadow-lg mb-3">
                <Accordion
                  title="What does Araz Development do?"
                  answer=" Araz Development Company is Limited Liability Company register under the coperate law of Nigeria since the year 2013, which are into General Construction, Real Estate, Facility Mgt, Logistic And Procurement and Property Consultant"
                />
              </div>
              <div className="bg-white p-4 shadow-lg mb-3">
                <Accordion
                  title="Can i get rented Apartment through Araz?"
                  answer="Yes of Course, we are into renting of various kind of apartment and short leasing. is either renting from us or recommending agent on that respect."
                />
              </div>
              <div className="bg-gray-50 p-4 shadow-lg mb-3">
                <Accordion
                  title="Can Araz Development help me build house on my property?"
                  answer=" Yes, we offer various kind of building for someone, for instant, we do Joint Venture (JV),and also as a developer meaning build for client and manage it for a period of time."
                />
              </div>
              <div className="bg-gray-50 p-4 shadow-lg mb-3">
                <Accordion
                  title="Who are Araz Development?"
                  answer=" Araz Development Company is Limited Liability Company register under the coperate law of Nigeria since the year 2013"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AccordionSection;
