import { motion } from "framer-motion";
import { assets, testimonialsData } from "../assets/assets";

const Testimonial = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container mx-auto py-14 lg:px-32 w-full overflow-hidden"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer{" "}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those who Found Home with us.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="max-w-[320px] border shadow-lg px-8 py-12 text-center"
          >
            <img
              className="w-20 h-20 rounded-full mx-auto mb-4"
              src={testimonial.image}
              alt={testimonial.alt}
            />
            <h2 className="text-xl text-gray-700 font-medium">
              {testimonial.name}
            </h2>
            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (items, index) => (
                <img key={index} src={assets.star_icon} alt="" />
              ))}
            </div>
            <p className="text-gray-600 text-justify">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
