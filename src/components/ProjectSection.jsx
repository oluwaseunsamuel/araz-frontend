import { useEffect, useState } from "react";
import { projectsData } from "../assets/assets";
import { motion } from "framer-motion";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardToShow, setCardToShow] = useState(1);

  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardToShow(projectsData.length);
      } else {
        setCardToShow(1);
      }
    };
    updateCardToShow();

    window.addEventListener("resize", updateCardToShow);

    return () => window.removeEventListener("resize", updateCardToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-4 p-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h2>
      <p className="text-center text-gray-500">
        Crafting spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/*----Slider Section Button */}
      <div className="flex justify-end items-center mb-8 md:gap-3">
        <button
          onClick={prevProject}
          className="p-2 bg-orange-500 hover:bg-yellow-950 transition-all ease-in-out duration-300 mr-2"
          aria-label="Previous Project"
        >
          <RiArrowLeftSLine size={30} style={{ color: "white" }} />
        </button>
        <button
          onClick={nextProject}
          className="p-2 bg-orange-500 hover:bg-yellow-950 transition-all ease-in-out duration-300 mr-2"
          aria-label="Next Project"
        >
          <RiArrowRightSLine size={30} style={{ color: "white" }} />
        </button>
      </div>

      {/*---- Project Slider Container  -----*/}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardToShow}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14 cursor-pointer hover:scale-110 ease-in-out duration-300"
              />
              <div className="absolute left-0 right-0 bottom-1 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-3 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSection;
