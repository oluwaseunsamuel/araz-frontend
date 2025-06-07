import { motion } from "framer-motion";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        scale: { type: "spring", visualDuration: 0.3 },
      }}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-50 flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.5,
          scale: { type: "spring", visualDuration: 0.3 },
        }}
        className="md:w-[620px] w-[90%] h-[560px] md:mx-auto flex flex-col "
      >
        <div
          className="text-white text-xl place-self-end cursor-pointer"
          onClick={() => onClose()}
        >
          X
        </div>
        <div className="bg-white p-2 overflow-y-scroll scroll scroll-smooth">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
