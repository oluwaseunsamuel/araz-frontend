import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ContactSection = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a2b9ddd3-80bc-46f9-8a74-c36da1de7c0f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="text-orange-500 underline underline-offset-4 decoration-1 under font-light">
          With us
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>
      <form
        onSubmit={onSubmit}
        autoComplete="off"
        className="max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Full Name
            <input
              className="w-full border border-gray-300 py-3 px-4 mt-2 focus:outline-none"
              type="text"
              name="Name"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              className="w-full border border-gray-300 py-3 px-4 mt-2 focus:outline-none"
              type="email"
              name="Email"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="w-full text-left mt-4">
          Choose A Topic
          <select
            className="w-full border border-gray-300 py-3 px-4 mt-2 focus:outline-none"
            name="Topic"
            required
          >
            <option>--Choose for Topic Options--</option>
            <option name="Buy">Want to Buy a Property</option>
            <option name="Rent">Want to Rent an Apartment</option>
            <option name="Lease">Want a Lease Apartment</option>
            <option name="Let">Want a Short Let Apartment</option>
            <option name="Contact">Want to Meet with your Company</option>
            <option name="Others">Others Not Listed</option>
          </select>
        </div>
        <div className="my-6 text-left">
          Your Message
          <textarea
            className="w-full border border-gray-300 py-3 px-4 mt-2 h-48 resize-none focus:outline-none"
            name="Message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button className="hover:bg-yellow-950 bg-orange-500 text-white md:px-8 md:py-3 px-6 py-2 mb-10 transitions-all duration-500 ease-in-out">
          {result ? result : "SEND MESSAGE"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactSection;
